import { Text } from "../../../../../../components/atomic/Text";
import { formatDate } from "../../../../../../utils/formatDate";
import { Appointment } from "../../../../AppointmentScreen/AppointmentScreen";

import { Container } from "./styles";

interface AppointmentCardProps
  extends Pick<Appointment, "patient" | "appointmentTime"> {
  onSelectAppointment(): void;
}

export function AppointmentCard({
  patient,
  appointmentTime,
  onSelectAppointment,
}: AppointmentCardProps) {
  return (
    <Container onClick={onSelectAppointment}>
      <Text weight="600">{patient?.name}</Text>
      <Text weight="400">{formatDate(appointmentTime)}</Text>
    </Container>
  );
}
