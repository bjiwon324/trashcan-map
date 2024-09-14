import classNames from "classnames/bind";
import styles from "./dropBottom.module.scss";
import close from "@/../public/images/dropClose.svg";
import Image from "next/image";
import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

const cn = classNames.bind(styles);

interface DropProps {
  children: React.ReactElement;
  title: string;
  closeBtn: () => void;
  btn: string;
  btnFunction?: () => void;
  submitState?: boolean;
}

export default function DropWrap({ children, title, closeBtn, btn, btnFunction, submitState = false }: DropProps) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(closeBtn, 290);
  };

  useOnClickOutside(ref, handleClose);

  const renderButtons = () => {
    if (btn === "none") return null;

    if (btn === "신고 거절" || btn === "신고 승인") {
      return (
        <article className={cn("cancle")}>
          <button className={cn("dropBtnCancel")} onClick={handleClose}>
            취소 하기
          </button>
          <button
            className={submitState ? cn("dropBtnOn") : cn("dropBtn")}
            onClick={submitState ? btnFunction : undefined}
          >
            사유 등록
          </button>
        </article>
      );
    }

    return (
      <button onClick={btnFunction} disabled={!submitState} className={submitState ? cn("dropBtnOn") : cn("dropBtn")}>
        {btn}
      </button>
    );
  };

  return (
    <div className={cn("drop")}>
      <div className={cn("dropWrap", { exit: !isVisible })} ref={ref}>
        <div className={cn("dropTitle")}>
          <div>{title}</div>
          <div className={cn("dropClose")} onClick={handleClose}>
            <Image src={close} fill alt="닫기" sizes="35px" />
          </div>
        </div>
        <div className={cn("dropChildren")}>{children}</div>
        {title === "탈퇴하기" ? (
          <div className={cn("cancle")}>
            <div onClick={handleClose} className={cn("dropBtnCancel")}>
              취소하기
            </div>
            <div
              onClick={submitState ? btnFunction : undefined}
              className={submitState ? cn("dropBtnOn") : cn("dropBtn")}
            >
              {btn}
            </div>
          </div>
        ) : (
          renderButtons()
        )}
      </div>
    </div>
  );
}

DropWrap.defaultProps = {
  children: <div>test</div>,
  title: "제목",
  btn: "전송",
};
