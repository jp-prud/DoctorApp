import { StyledButton, Title } from "./styles";
import { ButtonProps } from "./types";

export default function Button({
  title,
  variant = "solid",
  type = "button",
  disabled,
  isLoading,
  danger,
  onClick,
  ...rest
}: ButtonProps) {
  return (
    <StyledButton
      type={type}
      disabled={disabled || isLoading}
      danger={danger}
      onClick={() => onClick()}
      variant={variant}
      {...rest}
    >
      {!isLoading && (
        <Title variant={variant} {...rest}>
          {title}
        </Title>
      )}
      {/* {isLoading && <Spinner size={16} />} */}
    </StyledButton>
  );
}
