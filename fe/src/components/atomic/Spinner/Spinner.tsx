import { StyledSpinner } from "./styles";

export interface StyledSpinnerProps {
  size?: string;
}

export default function Spinner(size: StyledSpinnerProps) {
  return <StyledSpinner size={size || "32"} />;
}
