import { useForm } from "react-hook-form";
import { ControlledTextInput } from "../../../../../components/Controller/ControlledTextInput/index";
import { Modal } from "../../../../../components/Modal/Modal";
import { FormWrapper } from "../../styles";

import {
  editUserModalSchemaTypes,
  editUserModalSchema,
} from "./editFormModalSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";

interface EditFormModalProps {
  selectedUser: editUserModalSchemaTypes;
  modalIsOpen: boolean;
  handleClickCloseModal(): void;
}

export function EditFormModal({
  selectedUser,
  modalIsOpen,
  handleClickCloseModal,
}: EditFormModalProps) {
  const { control, resetField } = useForm<editUserModalSchemaTypes>({
    resolver: zodResolver(editUserModalSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      address: "",
      cpf: "",
      email: "",
      phone: "",
    },

    values: {
      ...selectedUser,
    },
  });

  const handleClickResetField = useCallback(
    (currentFieldName: keyof editUserModalSchemaTypes) => {
      return resetField(currentFieldName);
    },
    [resetField]
  );

  return (
    <Modal
      title="Editar Usuário"
      visible={modalIsOpen}
      onCancel={() => handleClickCloseModal()}
      onConfirm={() => handleClickCloseModal()}
      confirmLabel="Salvar Alterações"
    >
      <FormWrapper>
        <ControlledTextInput
          name="name"
          label="Nome"
          control={control}
          handleResetField={() => handleClickResetField("name")}
        />

        <ControlledTextInput
          name="email"
          label="E-mail"
          handleResetField={() => handleClickResetField("email")}
          type="email"
          control={control}
        />

        <ControlledTextInput
          name="cpf"
          label="CPF"
          handleResetField={() => handleClickResetField("cpf")}
          type="text"
          control={control}
          disabled
        />

        <ControlledTextInput
          name="address"
          label="Endereço"
          handleResetField={() => handleClickResetField("address")}
          type="text"
          control={control}
        />

        <ControlledTextInput
          name="phone"
          label="Telefone"
          handleResetField={() => handleClickResetField("phone")}
          type="text"
          control={control}
        />
      </FormWrapper>
    </Modal>
  );
}
