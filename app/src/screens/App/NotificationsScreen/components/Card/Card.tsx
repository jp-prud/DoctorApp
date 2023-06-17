import {Image} from 'react-native';

import {Text} from '@components/atomic/Text';
import {Notification} from '../../NotificationsScreen';

import {Container, Details} from './styles';

export function Card({title, description}: Notification) {
  return (
    <Container testId="notification-card">
      <Image
        source={{
          uri: 'http://via.placeholder.com/92x92.png',
          width: 92,
        }}
        style={{borderRadius: 8, height: 92}}
      />

      <Details>
        <Text size="MD" weight="800">
          {title}
        </Text>

        <Text size="SM" weight="400">
          {description}
        </Text>
      </Details>
    </Container>
  );
}
