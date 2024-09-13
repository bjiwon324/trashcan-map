import React, { DetailedHTMLProps, FocusEventHandler, InputHTMLAttributes, useEffect, useState } from "react";
import styles from "./AddBinForm.module.scss";
import classNames from "classnames/bind";
import Button from "@/components/commons/Button";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import ImgInput from "./ImgInput";
import Input from "./Input";
import { btnInputValues } from "@/lib/constants/btnInputValues";
import { useMutation } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { userAddress, userCoordinate } from "@/lib/atoms/userAtom";
import Modal from "@/components/commons/Modal/TrashHow";
import { MODAL_CONTENTS } from "@/lib/constants/modalContents";
import { useToggle } from "@/lib/hooks/useToggle";
import DropReason from "@/components/commons/DropBottom/DropReason";
import { patchEditbin, postAddbin } from "@/lib/apis/postAddbin";

const cn = classNames.bind(styles);

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
  isError?: boolean;
  errorMessage?: string;
  required?: boolean;
  id: string;
  onClickDelete?: (name: string) => void;
}

interface AddbinFormValues {
  address: string;
  title: string;
  binType?: string;
  imageUrl?: FileList | string;
}

export interface PostAddbinValues extends AddbinFormValues {
  type?: string;
  latitude?: number;
  longitude?: number;
}

interface Props {
  binDetail?: any;
  toggleIsEdit?: () => void;
}

export default function AddBinForm({ binDetail, toggleIsEdit }: Props) {
  const [isOpenDropBottom, openDropBottom, closeDropBottom] = useToggle(false);
  const [isOpenModal, openModal, closeModal] = useToggle(false);
  const [selectedBin, setSelectedBin] = useState<string>("");
  const [img, setImg] = useState<string>("");
  const [isBtnFocus, setIsBtnFocus] = useState(false);
  const [reason, setReason] = useState("");
  const [editPostData, setEditPostData] = useState<any>();
  const [coordinate] = useAtom(userCoordinate);
  const [address] = useAtom(userAddress);

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    control,
    formState: { errors },
  } = useForm<AddbinFormValues>({
    mode: "onBlur",
    defaultValues: { binType: "", title: "", imageUrl: "" },
  });

  useEffect(() => {
    if (!!binDetail && binDetail.binInfoForMember.isOwner) {
      setValue("address", binDetail.address);
      setValue("binType", binDetail.type);
      setValue("title", binDetail.title);
      setValue("imageUrl", binDetail.imageUrl);
      setSelectedBin(btnInputValues.find((item) => item.id === binDetail.type)?.id || "");
      setImg(binDetail.imageUrl);
      return;
    }

    if (address.roadAddress || address.address) {
      setValue("address", address.roadAddress || address.address);
    }
  }, [address, setValue, binDetail]);

  const handleBlurBtn: FocusEventHandler<HTMLButtonElement> = () => {
    setIsBtnFocus(false);
  };

  const handleFousBtn: FocusEventHandler<HTMLButtonElement> = () => {
    return setIsBtnFocus(true);
  };

  const handleDeleteInput = (name: string) => {
    setValue(name as keyof AddbinFormValues, "");
  };

  const handleChangeImgData = (imgUrl: string) => {
    setImg(imgUrl);
  };

  const handleBinTypeClick = (id: string) => {
    setSelectedBin(id);
    setValue("binType", id);
    trigger("binType");
  };

  const onSubmit: SubmitHandler<AddbinFormValues> = (data) => {
    const postData: PostAddbinValues = data;
    postData.type = postData.binType;
    delete postData.binType;
    postData.imageUrl = img;

    if (!!binDetail) {
      postData.latitude = binDetail.latitude;
      postData.longitude = binDetail.longitude;
      console.log("dddd", postData);
      return setEditPostData(postData);
    }

    postData.latitude = coordinate.x;
    postData.longitude = coordinate.y;
    submitAddbin(postData);
  };

  const { mutate: submitAddbin } = useMutation({
    mutationKey: ["post-add-bin"],
    mutationFn: (data: PostAddbinValues) => postAddbin(data),
    onSuccess: () => {
      openModal();
    },
  });
  const { mutate: submitEditbin } = useMutation({
    mutationKey: ["petch-edit-bin", binDetail.id],
    mutationFn: (data) => patchEditbin(binDetail.id, data),
    onSuccess: () => {
      openModal();
    },
    onError: (error: any) => alert(error.response.data.message),
  });

  const handleClickEditSubmit = (data: string) => {
    setReason(data);
    setEditPostData((prevData: PostAddbinValues) => ({
      ...prevData,
      modificationReason: data,
    }));
    submitEditbin(editPostData);
  };

  return (
    <>
      {!!binDetail && <h3 className={cn("edit-small-title")}>쓰레기통 정보 수정 요청</h3>}
      <form className={cn("addbin-form")} onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="address"
          label="쓰레기통 주소"
          placeholder="주소를 입력하세요"
          type="serch"
          {...register("address", { required: "주소는 필수입니다." })}
          isError={!!errors.address}
          errorMessage={errors.address?.message}
        />

        <div className={cn("addbin-selector", { error: errors.binType })}>
          <label className={cn("addbin-label", { focus: isBtnFocus }, { error: !!errors.binType })}>
            쓰레기통 분류
          </label>
          <Controller
            name="binType"
            control={control}
            rules={{ required: "필수 항목입니다." }}
            render={({ field, fieldState: { error } }) => (
              <>
                {btnInputValues.map((bin) => (
                  <Button
                    key={bin.id}
                    id={bin.id}
                    onFocus={handleFousBtn}
                    type="button"
                    selected={selectedBin === bin.id}
                    onClick={() => {
                      handleBinTypeClick(bin.id);
                    }}
                    {...field}
                    onBlur={handleBlurBtn}
                  >
                    {bin.label}
                  </Button>
                ))}
                {error && <p className={cn("error-message")}>{error.message}</p>} {/* 오류 메시지 출력 */}
              </>
            )}
          />
        </div>

        <Input
          id="title"
          label="장소 명칭"
          placeholder="명칭을 입력하세요"
          {...register("title", { required: "명칭은 필수입니다." })}
          isError={!!errors.title}
          onClickDelete={handleDeleteInput}
          errorMessage={errors.title?.message}
        />

        <ImgInput id="img" {...register("imageUrl")} img={img} onChangeImgData={handleChangeImgData} />

        {!!binDetail ? (
          <article className={cn("edit-btnWrapper")}>
            <Button status="editCancel" type="button" onClick={toggleIsEdit}>
              수정 취소
            </Button>
            <Button status="editComplete" type="submit" onClick={openDropBottom}>
              수정 완료
            </Button>
          </article>
        ) : (
          <Button status="primary" type="submit" disabled={!errors}>
            위치 등록하기
          </Button>
        )}
      </form>
      {isOpenModal && (
        <Modal
          modalState={!!binDetail ? MODAL_CONTENTS.requestFixBin : MODAL_CONTENTS.requestAddBin}
          modalClose={closeModal}
          moreInfo={reason}
        ></Modal>
      )}
      {isOpenDropBottom && (
        <DropReason
          onHandleSubmit={handleClickEditSubmit}
          state="정보"
          id={binDetail.binId}
          closeBtn={closeDropBottom}
          title="수정 사유 입력"
          placeholder="쓰레기통 수정"
        />
      )}
    </>
  );
}
