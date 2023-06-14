import { useAppointmentContext } from "../../../../../Context/AppointmentContext/AppointmentContext";
import { Text } from "../../../../../components/atomic/Text";
import { formatDate } from "../../../../../utils/formatDate";
import { Appointment } from "../../../AppointmentScreen/AppointmentScreen";

import { Container } from "./styles";

export function AppointmentCard({ appointment }: { appointment: Appointment }) {
  const { handleSelectedAppointment } = useAppointmentContext();

  return (
    <Container onClick={() => handleSelectedAppointment(appointment)}>
      <Text weight="600">{appointment.patient.name}</Text>
      <Text weight="400">{formatDate(appointment.appointmentTime)}</Text>
    </Container>
  );
}
