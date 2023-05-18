import Input from "../../../../../components/atomic/Input";
import { Text } from "../../../../../components/atomic/Text";
import { FormGroup } from "../../../../../components/FormGroup/index";
import { Modal } from "../../../../../components/Modal/Modal";
import { FormWrapper } from "../../styles";
import { User } from "../../UsersScreen";

interface DeleteFormModalProps {
  modalIsOpen: boolean;
  handleClickCloseModal(): void;
  selectedUser: Partial<User>;
}

export function DeleteFormModal({
  modalIsOpen,
  handleClickCloseModal,
  selectedUser: { name, email },
}: DeleteFormModalProps) {
  return (
    <Modal
      title="Excluir Usuário"
      visible={modalIsOpen}
      onCancel={() => handleClickCloseModal()}
      onConfirm={() => handleClickCloseModal()}
      cancelLabel="Manter Usuário"
      confirmLabel="Excluir Usuário"
      danger
    >
      <Text align="center">Tem certeza que deseja excluir o usuário?</Text>

      <FormWrapper>
        <FormGroup label="Nome" disabled>
          <Input type="text" value={name} disabled />
        </FormGroup>

        <FormGroup label="E-mail" disabled>
          <Input type="text" value={email} disabled />
        </FormGroup>
      </FormWrapper>
    </Modal>
  );
}
