import { Text } from "../../../../../components/atomic/Text";
import { Appointment } from "../../../AppointmentScreen/AppointmentScreen";
import { AppointmentCard } from "../AppointmentCard/AppointmentCard";
import { Container } from "./styles";

interface AppointmentBoardProps {
  title: string;
  icon: any;
  appointments: Appointment[];
}

export function AppointmentBoard({
  title,
  icon,
  appointments,
}: AppointmentBoardProps) {
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
            {appointments?.map(({ _id, patient, appointmentTime }) => (
              <AppointmentCard
                key={_id}
                patient={patient}
                appointmentTime={appointmentTime}
              />
            ))}
          </>
        )}
      </ul>
    </Container>
  );
}
