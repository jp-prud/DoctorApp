import { FieldError } from "react-hook-form";

export type FormGroupProps = {
  error?: FieldError;
  isSibling?: boolean;
  children: any;
};
