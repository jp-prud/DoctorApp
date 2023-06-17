import { Text } from "../../../../../../components/atomic/Text";
import { useModalContext } from "../../../../../../context/ModalContext/ModalContext";
import { Appointment } from "../../../../AppointmentScreen/AppointmentScreen";
import { AppointmentCard } from "../../Appointment/Card/Card";
import { Container } from "./styles";

interface AppointmentBoardProps {
  title: string;
  icon: any;
  appointments: Appointment[];
  onSelectAppointmentModal(selectedAppointment: Appointment): void;
}

export function AppointmentBoard({
  title,
  icon,
  appointments,
  onSelectAppointmentModal,
}: AppointmentBoardProps) {
  const { handleOpenModal } = useModalContext();

  return (
    <Container>
      <header>
        <img src={icon} title={title} alt={title} width="20" />

        <Text size="LG">{title}</Text>

        <Text size="LG" weight="400" className="quantity-board">
          {appointments.length}
        </Text>
      </header>

      <ul>
        {appointments.length > 0 && (
          <>
            {appointments?.map((appointment) => (
              <AppointmentCard
                key={appointment._id}
                patient={appointment.patient}
                appointmentTime={appointment.appointmentTime}
                onSelectAppointment={() => {
                  onSelectAppointmentModal(appointment);

                  handleOpenModal();
                }}
              />
            ))}
          </>
        )}
      </ul>
    </Container>
  );
}
