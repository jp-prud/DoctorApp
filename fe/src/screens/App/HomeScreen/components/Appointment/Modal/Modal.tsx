import { Modal } from "../../../../../../components/Modal/Modal";
import { Text } from "../../../../../../components/atomic/Text";
import { useModalContext } from "../../../../../../context/ModalContext/ModalContext";
import { Appointment } from "../../../../AppointmentScreen/AppointmentScreen";

interface AppointmentPropsModal {
  appointment: Appointment;
}

export function AppointmentModal({ appointment }: AppointmentPropsModal) {
  const { modalIsOpen, handleCloseModal } = useModalContext();

  return (
    <Modal
      title={appointment.patient.name}
      visible={modalIsOpen}
      onConfirm={handleCloseModal}
      cancelLabel="Cancelar Atendimento"
      confirmLabel={`${
        appointment.status !== "Aguardando_Pagamento" ? "Avançar" : "Finalizar"
      } Pedido`}
      onCancel={handleCloseModal}
    >
      <div className="details">
        <Text weight="400">Status do pedido</Text>
        <Text>{appointment.status}</Text>
      </div>
    </Modal>
  );
}
