import { createContext, useContext, useState, useCallback } from "react";

interface ModalContextProps {
  modalIsOpen: boolean;
  handleOpenModal(): void;
  handleCloseModal(): void;
}

const ModalContext = createContext({} as ModalContextProps);

export function ModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = useCallback(() => setModalIsOpen(true), []);

  const handleCloseModal = useCallback(() => setModalIsOpen(false), []);

  return (
    <ModalContext.Provider
      value={{
        modalIsOpen,
        handleOpenModal,
        handleCloseModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  const modalContext = useContext(ModalContext);

  return modalContext;
}
