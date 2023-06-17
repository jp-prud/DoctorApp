import ViewWrapper from '@components/atomic/ViewWrapper';
import {Button} from '@components/atomic/Button';
import {useAuthContext} from '@context/AuthContext';
import {FlatList, ListRenderItemInfo, View} from 'react-native';
import {CardScreen} from './components/CardScreen';

import {RoutesPathOptions} from '../../../@types/navigation';

export interface ScreensDTO {
  title: string;
  link: RoutesPathOptions;
}

export function ProfileScreen() {
  const {authLoading, logoutConsumer} = useAuthContext();

  const screensOptions: ScreensDTO[] = [
    {
      title: 'Notificações',
      link: 'NotificationsView',
    },
  ];

  function renderScreensOptions({item}: ListRenderItemInfo<ScreensDTO>) {
    return <CardScreen {...item} />;
  }

  function Separator() {
    return <View style={{height: 24}} />;
  }

  return (
    <ViewWrapper>
      <FlatList
        data={screensOptions}
        keyExtractor={item => item.title}
        renderItem={renderScreensOptions}
        ItemSeparatorComponent={<Separator />}
        ListFooterComponent={
          <Button
            title="Logout"
            size="5X"
            variant="solid"
            isLoading={authLoading}
            onPress={() => logoutConsumer()}
          />
        }
        ListFooterComponentStyle={{marginTop: 24}}
      />
    </ViewWrapper>
  );
}
