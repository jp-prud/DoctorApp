import { FieldError } from "react-hook-form";
import { Text } from "../atomic/Text";

import { Container, InputTextHelper } from "./styles";

export type FormGroupProps = {
  error?: FieldError;
  label: string;
  disabled?: boolean;
  children: React.ReactNode;
};

export function FormGroup({
  error,
  label,
  disabled,
  children,
}: FormGroupProps) {
  return (
    <Container>
      <Text
        color={disabled ? "GRAY_300" : "GRAY_500"}
        weight="500"
        size="SM"
        style={{ marginBottom: 6 }}
      >
        {label}
      </Text>

      {children}

      {error?.message && <InputTextHelper>{error.message}</InputTextHelper>}
    </Container>
  );
}
