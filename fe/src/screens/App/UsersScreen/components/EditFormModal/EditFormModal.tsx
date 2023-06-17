import { useForm } from "react-hook-form";
import { ControlledTextInput } from "../../../../../components/Controller/ControlledTextInput/index";
import { Modal } from "../../../../../components/Modal/Modal";
import { User } from "../../UsersScreen";
import { FormWrapper } from "../../styles";

import {
  editUserModalSchemaTypes,
  editUserModalSchema,
} from "./editFormModalSchema";

type PartialUserFields = Pick<
  User,
  "name" | "email" | "phone" | "address" | "cpf"
>;

interface EditFormModalProps {
  selectedUser: PartialUserFields;
  modalIsOpen: boolean;
  handleClickCloseModal(): void;
}

export function EditFormModal({
  selectedUser,
  modalIsOpen,
  handleClickCloseModal,
}: EditFormModalProps) {
  const { control } = useForm<PartialUserFields>({
    values: {
      ...selectedUser,
    },
  });

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
          handleResetField={(name: string) => console.log(name)}
          type="text"
        />

        <ControlledTextInput
          name="email"
          label="E-mail"
          handleResetField={(name: string) => console.log(name)}
          type="email"
          control={control}
        />

        <ControlledTextInput
          name="cpf"
          label="CPF"
          handleResetField={(name: string) => console.log(name)}
          type="text"
          control={control}
          disabled
        />

        <ControlledTextInput
          name="address"
          label="Endereço"
          handleResetField={(name: string) => console.log(name)}
          type="text"
          control={control}
        />

        <ControlledTextInput
          name="phone"
          label="Telefone"
          handleResetField={(name: string) => console.log(name)}
          type="text"
          control={control}
        />
      </FormWrapper>
    </Modal>
  );
}
