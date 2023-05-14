import {Heading} from '@components/atomic/Heading';
import ViewWrapper from '@components/atomic/ViewWrapper';

import {ListWrapper} from './styles';
import {Text} from '@components/atomic/Text';

export function ListAppointmentScreen() {
  return (
    <ViewWrapper>
      <Heading title="Pedidos" />

      <ListWrapper>
        <Text>Teste</Text>
      </ListWrapper>
    </ViewWrapper>
  );
}
