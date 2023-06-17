import { useEffect } from "react";

import xCircleIcon from "../../../assets/images/icons/x-circle.svg";
import checkCircleIcon from "../../../assets/images/icons/check-circle.svg";

import { Container } from "./styles";

export type ToastVariants = "default" | "success" | "danger";

export interface ToastProps {
  message: {
    text: string;
    type?: ToastVariants;
    duration?: number;
  };
}

export interface ToastMessageProps extends ToastProps {
  id: number;
  onRemove(id: number): void;
}

export function ToastMessage({
  id,
  message: { type = "default", text, duration = 7000 },
  onRemove,
}: ToastMessageProps) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemove(id);
    }, duration);

    return () => clearTimeout(timeoutId);
  }, [id, duration, onRemove]);

  return (
    <Container
      type={type}
      onClick={() => onRemove(id)}
      tabIndex={0}
      role="button"
    >
      {type === "danger" && <img src={xCircleIcon} alt="X" />}
      {type === "success" && <img src={checkCircleIcon} alt="Check" />}

      {text}
    </Container>
  );
}
