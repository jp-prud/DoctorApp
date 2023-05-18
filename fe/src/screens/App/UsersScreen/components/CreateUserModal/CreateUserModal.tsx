import { useForm } from "react-hook-form";
import { Modal } from "../../../../../components/Modal/Modal";
import { ControlledTextInput } from "../../../../../components/Controller/ControlledTextInput";

interface CreateFormModalProps {
  modalIsOpen: boolean;
  handleClickCloseModal(): void;
}

export function CreateUserModal({
  modalIsOpen,
  handleClickCloseModal,
}: CreateFormModalProps) {
  const { control } = useForm();

  return (
    <Modal
      title="Criar Usuário"
      visible={modalIsOpen}
      onConfirm={() => handleClickCloseModal()}
      onCancel={() => handleClickCloseModal()}
    >
      <ControlledTextInput
        control={control}
        name="name"
        label="Nome"
        handleResetField={(name: string) => {
          throw new Error("Function not implemented.");
        }}
      />

      <ControlledTextInput
        control={control}
        name="email"
        label="E-mail"
        handleResetField={(name: string) => {
          throw new Error("Function not implemented.");
        }}
      />

      <ControlledTextInput
        control={control}
        name="cpf"
        label="CPF"
        handleResetField={(name: string) => {
          throw new Error("Function not implemented.");
        }}
      />

      <ControlledTextInput
        control={control}
        name="address"
        label="Endereço"
        handleResetField={(name: string) => {
          throw new Error("Function not implemented.");
        }}
      />

      <ControlledTextInput
        control={control}
        name="phone"
        label="Telefone"
        handleResetField={(name: string) => {
          throw new Error("Function not implemented.");
        }}
      />
    </Modal>
  );
}
