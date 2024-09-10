import { useQuery } from "@tanstack/react-query";
import Card from "../Card";
import styles from "./CardList.module.scss";
import classNames from "classnames/bind";
import { getMembersTimeline } from "@/lib/apis/members";
import { loginState } from "@/lib/atoms/userAtom";
import { useAtom } from "jotai";
import { useEffect } from "react";

const cn = classNames.bind(styles);

export type Status = "REJECTED" | "APPROVED" | "PENDING";
export interface CardProps {
  id: number;
  title: string;
  address: string;
  type: string;
  status: string;
  createdAt: string;
  bookmarkCount: number;
  isAdmin?: boolean;
  admin: boolean;
  nickname?: string;
}

export default function CardList() {
  const [, setLoginState] = useAtom(loginState);
  const { data: cardLists } = useQuery({
    queryKey: ["cardList"],
    queryFn: getMembersTimeline,
  });
  // useEffect(() => {
  //   if (cardLists === null) {
  //     setLoginState(false);
  //   } else {
  //     setLoginState(true);
  //   }
  // }, []);
  return (
    <ul className={cn("card-list")}>
      {cardLists === null ? (
        <span>로그인 후 이용 가능합니다.</span>
      ) : (
        cardLists?.map((item: any) => (
          <li key={item.id}>
            <Card admin={false} {...item} />
          </li>
        ))
      )}
    </ul>
  );
}
