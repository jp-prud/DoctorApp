export interface IModalContext {
  isOpenModal: boolean;
  handleClickOpenModal(): void;
  handleClickCloseModal(): void;
}

export interface IModalProvider {
  children: React.ReactNode;
}
