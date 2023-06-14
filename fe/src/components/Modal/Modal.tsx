import ReactPortal from "../ReactPortal/ReactPortal";

import Button from "../atomic/Button/Button";
import { Text } from "../atomic/Text";

import CloseIcon from "../../assets/images/icons/close.svg";

import { Overlay, Container, Header, Footer } from "./styles";

interface ModalProps {
  title: string;
  danger?: boolean;
  visible: boolean;
  children: React.ReactNode;
  isLoading?: boolean;
  cancelLabel?: string;
  confirmLabel?: string;
  onCancel?(): void;
  onConfirm(): void;
}

export function Modal({
  danger,
  title,
  children,
  isLoading,
  visible,
  cancelLabel,
  confirmLabel = "Confirmar",
  onCancel,
  onConfirm,
}: ModalProps) {
  if (!visible) {
    return null;
  }

  return (
    <ReactPortal containerId="modal-root">
      <Overlay>
        <Container danger={danger}>
          <Header danger={danger}>
            <Text>{title}</Text>

            {onCancel && (
              <button className="close-button" onClick={() => onCancel()}>
                <img src={CloseIcon} alt="Fechar" title="Fechar" />
              </button>
            )}
          </Header>

          <div className="modal-body">{children}</div>

          <Footer danger={danger}>
            {cancelLabel && onCancel && (
              <Button
                type="button"
                className="cancel-button"
                onClick={() => onCancel()}
                disabled={isLoading}
                variant="link"
                title={cancelLabel}
                size="4X"
              />
            )}

            <Button
              type="button"
              danger={danger}
              onClick={() => onConfirm()}
              isLoading={isLoading}
              title={confirmLabel}
              size="4X"
            />
          </Footer>
        </Container>
      </Overlay>
    </ReactPortal>
  );
}
