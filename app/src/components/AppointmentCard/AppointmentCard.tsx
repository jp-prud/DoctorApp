import {Text} from '@components/atomic/Text';
import {AppointmentDTO} from 'src/services/AppointmentsService';
import {Container, Details, Footer} from './styles';
import formatDate from '@utils/formatDate';

type AppointmentCardProps = {
  appointment: AppointmentDTO;
  handleSelectAppointment(appointment: AppointmentDTO): void;
};

export function AppointmentCard({
  appointment,
  handleSelectAppointment,
}: AppointmentCardProps) {
  return (
    <Container
      onPress={() => handleSelectAppointment(appointment)}
      testID="Appointment-Card">
      <Details>
        <Text>{appointment.doctor.name}</Text>

        <Text>{appointment.status}</Text>
      </Details>

      <Footer>
        <Text style={{width: '100%', marginBottom: 12}}>
          {appointment.description}
        </Text>

        <Text>{appointment.address}</Text>

        <Text>{formatDate(appointment.appointmentTime)}</Text>
      </Footer>
    </Container>
  );
}
