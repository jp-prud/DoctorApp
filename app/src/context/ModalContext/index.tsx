import {createContext, useContext, useState, useCallback} from 'react';

import {IModalContext, IModalProvider} from './types';

const ModalContext = createContext<IModalContext>({} as IModalContext);

function ModalContextProvider({children}: IModalProvider) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleClickOpenModal = useCallback(() => setIsOpenModal(true), []);

  const handleClickCloseModal = useCallback(() => setIsOpenModal(false), []);

  return (
    <ModalContext.Provider
      value={{
        isOpenModal,
        handleClickOpenModal,
        handleClickCloseModal,
      }}>
      {children}
    </ModalContext.Provider>
  );
}

function useModalContext() {
  const context: IModalContext = useContext(ModalContext);

  return context;
}

export {ModalContextProvider, useModalContext};
