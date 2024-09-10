import MyPageNologin from "@/components/domains/mypage/MyPageNologin";
import MyPageProfile from "@/components/domains/mypage/MyPageProfile";
import MyPageToggle from "@/components/domains/mypage/MyPageToggle";
import { getMembers } from "@/lib/apis/members";
import { adminUser, loginState } from "@/lib/atoms/userAtom";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useEffect } from "react";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const { req } = context;

  const cookies = req.headers.cookie || "";
  const isLoggedIn = cookies.includes("loginState=true"); // 쿠키에서 로그인 상태를 확인

  await queryClient.prefetchQuery({
    queryKey: ["memberDatas", isLoggedIn],
    queryFn: () => getMembers(cookies), // 쿠키를 전달하여 API 호출
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient), // 상태를 직렬화하여 클라이언트에 전달
      cookies, // 쿠키도 전달
    },
  };
};

export default function MyPage({
  dehydratedState,
  cookies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const memberData = dehydratedState.queries[0].state.data;
  const [isLogin, setLoginState] = useAtom(loginState);
  const [, setIsAdmin] = useAtom(adminUser);

  // 쿠키에서 값을 가져오는 함수
  function getCookieValue(name: string, cookieString: string) {
    const cookies = cookieString.split("; ");
    for (let cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (key === name) {
        return value;
      }
    }
    return null; // 쿠키가 없을 경우
  }

  // SSR에서 받은 쿠키로 처리
  const login = getCookieValue("loginState", cookies);

  useEffect(() => {
    if (memberData !== null) {
      setLoginState(true);
      document.cookie = "loginState=true; path=/;";
      setIsAdmin(memberData.role);
    } else {
      setLoginState(false);
      document.cookie = "loginState=false; path=/;";
    }
  }, [memberData, setLoginState, setIsAdmin]);

  return login && isLogin && memberData !== null ? (
    <>
      <MyPageProfile memberData={memberData} />
      <MyPageToggle />
    </>
  ) : (
    <>
      <MyPageNologin />
      <MyPageToggle />
    </>
  );
}
