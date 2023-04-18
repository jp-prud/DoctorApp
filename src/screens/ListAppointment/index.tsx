import {Heading} from '@components/atomic/Title';
import ViewWrapper from '@components/atomic/ViewWrapper';

import {ListWrapper} from './styles';
import {Text} from '@components/atomic/Text';

export function ListAppointment() {
  return (
    <ViewWrapper>
      <Heading content="Pedidos" size={'SM'} />

      <ListWrapper>
        <Text>Teste</Text>
      </ListWrapper>
    </ViewWrapper>
  );
}
