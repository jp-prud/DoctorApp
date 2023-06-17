import { useForm } from "react-hook-form";
import { Modal } from "../../../../../components/Modal/Modal";
import { ControlledTextInput } from "../../../../../components/Controller/ControlledTextInput";

import {
  createUserModalSchema,
  createUserModalSchemaTypes,
} from "./createUserModalSchema";
import { zodResolver } from "@hookform/resolvers/zod";

interface CreateFormModalProps {
  modalIsOpen: boolean;
  handleClickCloseModal(): void;
}

export function CreateUserModal({
  modalIsOpen,
  handleClickCloseModal,
}: CreateFormModalProps) {
  const { control, handleSubmit, resetField } =
    useForm<createUserModalSchemaTypes>({
      resolver: zodResolver(createUserModalSchema),
      mode: "onChange",
      defaultValues: {
        name: "",
        email: "",
        cpf: "",
        address: "",
        phone: "",
      },
    });

  function handleClickCreateUserSubmit(data: createUserModalSchemaTypes) {
    console.log(data);
  }

  function handleClickResetField(
    currentFieldName: keyof createUserModalSchemaTypes
  ) {
    return resetField(currentFieldName);
  }

  return (
    <Modal
      title="Criar Usuário"
      visible={modalIsOpen}
      onConfirm={handleSubmit(handleClickCreateUserSubmit)}
      onCancel={() => handleClickCloseModal()}
    >
      <ControlledTextInput
        control={control}
        name="name"
        label="Nome"
        handleResetField={() => handleClickResetField("name")}
      />

      <ControlledTextInput
        control={control}
        name="email"
        label="E-mail"
        handleResetField={() => handleClickResetField("email")}
      />

      <ControlledTextInput
        control={control}
        name="cpf"
        label="CPF"
        handleResetField={() => handleClickResetField("cpf")}
      />

      <ControlledTextInput
        control={control}
        name="address"
        label="Endereço"
        handleResetField={() => handleClickResetField("address")}
      />

      <ControlledTextInput
        control={control}
        name="phone"
        label="Telefone"
        handleResetField={() => handleClickResetField("phone")}
      />
    </Modal>
  );
}
