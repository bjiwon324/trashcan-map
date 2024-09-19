import { BinDetail } from "@/lib/atoms/binAtom";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  isError?: boolean;
  errorMessage?: string;
  required?: boolean;
  id: string;
  onClickDelete?: (name: string) => void;
}

export interface AddbinFormValues {
  address: string;
  title: string;
  binType?: string;
  imageUrl?: string;
}

export interface PostAddbinValues extends AddbinFormValues {
  type?: string;
  latitude?: number;
  longitude?: number;
}

export interface AddFormProps {
  binDetail?: BinDetail;
  toggleIsEdit?: () => void;
  isAdmin?: boolean;
}