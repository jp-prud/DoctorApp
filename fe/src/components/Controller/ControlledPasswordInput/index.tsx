import { InputHTMLAttributes, useState } from "react";

import { Controller, UseControllerProps, FieldValues } from "react-hook-form";

import { FormGroup, FormGroupProps } from "../../FormGroup";

import Input from "../../atomic/Input";

import { InputWrapper, ButtonContainer } from "./styles";

// import EyeOffIcon from "@assets/icons/eye-off.svg";
// import EyeShowIcon from "@assets/icons/eye-show.svg";

// import { useTheme } from "styled-components";

export function ControlledPasswordInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  label,
  ...textInputProps
}: UseControllerProps<FormType> &
  InputHTMLAttributes<HTMLInputElement> &
  Pick<FormGroupProps, "label">) {
  const [visiblePassword, setVisiblePassword] = useState(false);

  function handleToggleVisibilityPassword() {
    setVisiblePassword((prevState) => !prevState);
  }

  // const theme = useTheme();

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

            {value && (
              <ButtonContainer onClick={() => handleToggleVisibilityPassword()}>
                {/* {visiblePassword ? <EyeShowIcon /> : <EyeOffIcon />} */}
                {visiblePassword ? "<EyeShowIcon />" : "<EyeOffIcon />"}
              </ButtonContainer>
            )}
          </InputWrapper>
        </FormGroup>
      )}
    />
  );
}
