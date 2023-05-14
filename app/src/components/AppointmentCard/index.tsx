import {Text} from '@components/atomic/Text';
import {DATE_STYLES_FORMAT} from '../../constants';
import {AppointmentDTO} from 'src/services/AppointmentsService';
import {Container, Details} from './styles';

type AppointmentCardProps = AppointmentDTO & {};

export function AppointmentCard({
  medicData,
  address,
  date,
}: AppointmentCardProps) {
  return (
    <Container>
      <Details>
        <Text>{medicData.specialiation}</Text>

        <Text>
          {new Date(date).toLocaleString('pt-BR', DATE_STYLES_FORMAT)}
        </Text>
      </Details>

      <Text>{medicData.name}</Text>
      <Text>{address}</Text>
    </Container>
  );
}
