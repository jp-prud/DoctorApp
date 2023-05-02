import {useState, useCallback} from 'react';

import {FlatList, ListRenderItemInfo, View} from 'react-native';

import {MedicCard} from '@components/MedicCard';
import {CategoriesFilter} from './components/CategoriesFilter/index';
import Separator from '@components/atomic/Separator';
import {Text} from '@components/atomic/Text';
import {AppointmentModal} from '@components/AppointmentModal';

import {useModalContext} from '@context/ModalContext';
import {useNavigation} from '@react-navigation/native';

import {MedicProps} from 'src/@types';
import {
  Container,
  Header,
  NotificationButton,
  MedicListContainer,
} from './styles';
import medics from '../../../mocks/Medics';

import BellIcon from '@assets/icons/bell.svg';

export function HomeScreen() {
  const [selectedMedic, setSelectedMedic] =
    useState<Pick<MedicProps, 'name' | 'specialization'>>();
  const {handleClickOpenModal} = useModalContext();

  const navigation = useNavigation();

  function renderItem({item}: ListRenderItemInfo<MedicProps>) {
    return (
      <MedicCard
        {...item}
        handleMakeAnAppointment={handleClickOpenAppoinmtmentModal}
      />
    );
  }

  const handleClickOpenAppoinmtmentModal = useCallback(
    (medicData: Pick<MedicProps, 'name' | 'specialization'>) => {
      setSelectedMedic(medicData);

      handleClickOpenModal();
    },
    [handleClickOpenModal],
  );

  return (
    <Container>
      <Header>
        <View>
          <Text size="MD" opacity={0.9}>
            Bem-vindo(a) ao
          </Text>

          <Text size="XL" weight={800}>
            DOCTOR
            <Text size="XL">APP</Text>
          </Text>
        </View>

        <NotificationButton
          onPress={() => navigation.navigate('NotificationsView')}>
          <BellIcon />
        </NotificationButton>
      </Header>

      <CategoriesFilter />

      <MedicListContainer>
        <FlatList
          data={medics}
          renderItem={renderItem}
          keyExtractor={item => item.name}
          ListEmptyComponent={<Text>vazia</Text>}
          ItemSeparatorComponent={Separator}
        />
      </MedicListContainer>

      <AppointmentModal selectedMedic={selectedMedic} />
    </Container>
  );
}
