import { ControlledTextInput } from "../../../../../components/Controller/ControlledTextInput";
import { Modal } from "../../../../../components/Modal/Modal";
import { Text } from "../../../../../components/atomic/Text";
import { useModalContext } from "../../../../../context/ModalContext/ModalContext";
import { Wrapper } from "./styles";

import { useForm } from "react-hook-form";

export function EditAppointmentModal() {
  const { handleCloseModal } = useModalContext();

  const { control } = useForm();

  return (
    <Modal
      title="Editar atendimento"
      visible={false}
      onConfirm={handleCloseModal}
      onCancel={handleCloseModal}
    >
      <Wrapper>
        <div className="details">
          <Text>Imagem</Text>

          <div className="form-wrapper">
            <ControlledTextInput
              control={control}
              label="Nome do paciente"
              name="patient-name"
              disabled
              handleResetField={function (name: string): void {
                throw new Error("Function not implemented.");
              }}
            />
            <ControlledTextInput
              control={control}
              label="Descrição"
              name="description"
              handleResetField={function (name: string): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        </div>

        <div className="content">
          <Text>Informações</Text>
        </div>
      </Wrapper>
    </Modal>
  );
}
