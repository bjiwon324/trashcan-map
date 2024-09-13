import Modal from "@/components/commons/Modal/TrashHow";
import AdminDetail from "@/components/domains/mypage/Admin/AdminDetail";
import AdminPageBar from "@/components/domains/mypage/Admin/AdminPageBar";
import { postAccept } from "@/lib/apis/ask";
import { MODAL_CONTENTS } from "@/lib/constants/modalContents";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useToggle } from "@/lib/hooks/useToggle";
import { useAtom } from "jotai";
import { binDetail } from "@/lib/atoms/binAtom";

export default function AskDetail() {
  // const router = useRouter();
  // const { id } = router.query;
  const [askDetail] = useAtom(binDetail);

  const [isOpenModal, openModal, closeModal] = useToggle(false);
  //const [isOpenErrorModal, openErrorModal, closeErrorModal] = useToggle(false);

  const { mutate: handleAccept } = useMutation({
    mutationFn: () => postAccept(String(askDetail.binId)),
    onSuccess: (res) => {
      !!res && openModal();
    },
    onError: (error: any) => {
      alert(error.response.data.message);
    },
  });

  const handleCloseModal = () => {
    closeModal();
  };
  return (
    <>
      <AdminPageBar />
      <AdminDetail state={"등록"} binDetail={askDetail} approve={handleAccept} />
      {isOpenModal && <Modal modalClose={handleCloseModal} modalState={MODAL_CONTENTS.approveAdd} />}
    </>
  );
}
