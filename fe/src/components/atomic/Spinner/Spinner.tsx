import { StyledSpinner } from "./styles";

export interface StyledSpinnerProps {
  size?: number;
}

export default function Spinner({ size = 32 }: StyledSpinnerProps) {
  return <StyledSpinner size={size} />;
}
