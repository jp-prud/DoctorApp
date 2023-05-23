import { Text } from "../../../../../components/atomic/Text";
import { formatDate } from "../../../../../utils/formatDate";
import { Appointment } from "../../../AppointmentScreen/AppointmentScreen";

import { Container } from "./styles";

export function AppointmentCard({ patient, appointmentTime }: Appointment) {
  return (
    <Container>
      <Text weight="600">{patient.name}</Text>
      <Text weight="400">{formatDate(appointmentTime)}</Text>
    </Container>
  );
}
