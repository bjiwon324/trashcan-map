import { forwardRef } from "react";
import { InputProps } from ".";
import styles from "./AddBinForm.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, type = "text", isError, errorMessage, ...rest }, ref) => (
    <div>
      <input id={id} type={type} className={cn("addbin-input", { error: isError })} ref={ref} {...rest} />
      <label htmlFor={id} className={cn("addbin-label", { error: isError })}>
        {label}
      </label>
      {errorMessage && <p className={cn("error-message")}>{errorMessage}</p>}
    </div>
  )
);

Input.displayName = "Input";

export default Input;
