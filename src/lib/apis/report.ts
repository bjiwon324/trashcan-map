import { instance } from "./axios";

export const getAdminBinsReport = async (data: any, cookies: any) => {
  const filter =
    data === "전체" ? "ENTIRE" : data === "처리 전" ? "PENDING" : "FINISHED";
  try {
    const res = await instance.get(`/admin/bins/complaints?filter=${filter}`, {
      headers: {
        Cookie: cookies || "", // 쿠키를 헤더에 포함하여 API 요청
      },
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};