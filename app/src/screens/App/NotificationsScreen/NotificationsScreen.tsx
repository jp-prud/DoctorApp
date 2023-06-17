import {ListRenderItemInfo, FlatList, View} from 'react-native';
import {Heading} from '@components/atomic/Heading';

import {Container} from './styles';
import {notificationsList} from 'src/mocks/Notifications';

import {Card} from './components/Card/Card';
import {Text} from '@components/atomic/Text';

export type Notification = {
  title: string;
  description: string;
};

export type NotificationGroup = {
  date: string;
  notifications: Notification[];
};

const FORMATED_DATE_OPTIONS = {
  weekday: 'long',
  day: '2-digit',
  month: 'long',
  year: 'numeric',
};

export function NotificationsScreen() {
  function Separator({height = 24}: {height?: number}) {
    return <View style={{height: height}} />;
  }

  function renderNotificationDayContainer({
    item: notificationDayList,
  }: ListRenderItemInfo<NotificationGroup>) {
    const {date, notifications} = notificationDayList;

    const currentFormatedDate = new Date(Number(date)).toLocaleString(
      'pt-BR',
      FORMATED_DATE_OPTIONS,
    );

    return (
      <View>
        <Text style={{marginBottom: 8}} weight="500">
          {currentFormatedDate}
        </Text>

        <FlatList
          data={notifications}
          keyExtractor={({title}) => `${title}-${Math.random()}`}
          renderItem={renderNotificationCard}
          ItemSeparatorComponent={<Separator height={20} />}
        />
      </View>
    );
  }

  function renderNotificationCard({
    item: notificationData,
  }: ListRenderItemInfo<Notification>) {
    return <Card {...notificationData} />;
  }

  return (
    <Container>
      <Heading title="Notificações" hasBackButton />

      <FlatList
        data={notificationsList}
        keyExtractor={({date}: NotificationGroup) => date}
        renderItem={renderNotificationDayContainer}
        style={{marginBottom: 8}}
        ItemSeparatorComponent={<Separator />}
      />
    </Container>
  );
}
