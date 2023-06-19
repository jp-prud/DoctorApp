import { useCallback, useState } from "react";
import { Modal } from "../../../../../../components/Modal/Modal";
import { Text } from "../../../../../../components/atomic/Text";
import { useModalContext } from "../../../../../../context/ModalContext/ModalContext";
import { Appointment } from "../../../../AppointmentScreen/AppointmentScreen";
import toast from "../../../../../../utils/toast";

interface AppointmentPropsModal {
  appointment: Appointment;
}

export function AppointmentModal({ appointment }: AppointmentPropsModal) {
  const { modalIsOpen, handleCloseModal } = useModalContext();
  const [isLoading, setIsLoading] = useState(false);

  const getNextStatus = useCallback((status: string) => {
    switch (status) {
      case "Aguardando":
        return "Em_Atendimento";
      case "Em_Atendimento":
        return "Aguardando_Pagamento";
      case "Aguardando_Pagamento":
        return "Finalizado";
      default:
        return "Finalizado";
    }
  }, []);

  const handleClickUpdateStatus = useCallback(async () => {
    const newStatus = getNextStatus(appointment.status);

    console.log({ newStatus });

    try {
      setIsLoading(true);

      await fetch(
        `https://api-production-160a.up.railway.app/appointments/${appointment._id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "patch",
          body: JSON.stringify({
            status: newStatus,
          }),
        }
      );
    } catch (error) {
      toast({
        message: {
          text: "Erro ao atualizar o status",
          type: "danger",
        },
      });
    } finally {
      setIsLoading(false);
    }
  }, [getNextStatus, appointment]);

  console.log({ appointment });

  return (
    <Modal
      title={appointment.patient.name}
      visible={modalIsOpen}
      onConfirm={handleClickUpdateStatus}
      cancelLabel="Cancelar Atendimento"
      confirmLabel={`${
        appointment.status !== "Finalizado" ? "Avançar" : "Finalizar"
      } atendimento`}
      onCancel={handleCloseModal}
      isLoading={isLoading}
    >
      <div className="details">
        <Text weight="400">Status do pedido</Text>
        <Text>{appointment.status}</Text>
      </div>
    </Modal>
  );
}
