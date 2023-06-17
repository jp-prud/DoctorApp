import { useCallback, useEffect, useState } from "react";
import { ToastMessage, ToastProps } from "../ToastMessage/ToastMessage";
import { ToastContainer as Wrapper } from "./styles";
import { toastEventManager } from "../../../utils/toast";

interface ToastListProps extends ToastProps {
  id: number;
}

export function ToastContainer() {
  const [messages, setMessages] = useState<ToastListProps[]>([]);

  useEffect(() => {
    function handleAddToast({ message }: ToastProps) {
      setMessages((prevState) => [
        ...prevState,
        {
          id: Math.random(),
          message: {
            ...message,
          },
        },
      ]);
    }

    toastEventManager.on("addtoast", handleAddToast);

    return () => {
      toastEventManager.removeListener("addtoast", handleAddToast);
    };
  }, []);

  const handleRemoveMessage = useCallback((messageId: number) => {
    setMessages((prevState) => prevState.filter(({ id }) => id !== messageId));
  }, []);

  return (
    <Wrapper>
      {messages.map(({ id, message }) => (
        <ToastMessage
          key={id}
          id={id}
          message={message}
          onRemove={handleRemoveMessage}
        />
      ))}
    </Wrapper>
  );
}
