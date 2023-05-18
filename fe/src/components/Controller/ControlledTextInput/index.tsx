import { InputHTMLAttributes } from "react";

import { Controller, UseControllerProps, FieldValues } from "react-hook-form";

import { FormGroup, FormGroupProps } from "../../FormGroup";

import Input from "../../atomic/Input";

import { InputWrapper, ButtonContainer } from "./styles";

import ClearIcon from "../../../assets/images/icons/close.svg";

interface ControlledTextInputPropsCustom {
  handleResetField(name: string): void;
}

export function ControlledTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  label,
  handleResetField,
  ...textInputProps
}: UseControllerProps<FormType> &
  InputHTMLAttributes<HTMLInputElement> &
  ControlledTextInputPropsCustom &
  Pick<FormGroupProps, "label">) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState }) => (
        <FormGroup error={fieldState.error} label={label}>
          <InputWrapper>
            <Input
              onChange={onChange}
              value={value}
              error={fieldState?.error}
              {...textInputProps}
            />

            {value && !textInputProps?.disabled && (
              <ButtonContainer onClick={() => handleResetField(name)}>
                <img src={ClearIcon} alt="Clear Icon" width="42" />
              </ButtonContainer>
            )}
          </InputWrapper>
        </FormGroup>
      )}
    />
  );
}
