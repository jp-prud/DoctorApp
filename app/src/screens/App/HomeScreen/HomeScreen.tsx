import {useState, useCallback} from 'react';

import {FlatList, ListRenderItemInfo, View} from 'react-native';

import {useQuery} from '@tanstack/react-query';

import {MedicCard} from '@components/MedicCard';
import {CategoriesFilter} from './components/CategoriesFilter/index';
import Separator from '@components/atomic/Separator';
import {Text} from '@components/atomic/Text';
import {AppointmentModal} from '@components/AppointmentModal';

import {useModalContext} from '@context/ModalContext';
import {useNavigation} from '@react-navigation/native';

import MedicsService from '@services/MedicsService';

import {MedicProps} from 'src/@types';
import {
  Container,
  Header,
  NotificationButton,
  MedicListContainer,
} from './styles';

import BellIcon from '@assets/icons/bell.svg';

export function HomeScreen() {
  const navigation = useNavigation();
  const {handleClickOpenModal} = useModalContext();

  const {data, isLoading, error} = useQuery<MedicProps[]>(
    ['medics'],
    loadMedics,
  );

  const [selectedMedic, setSelectedMedic] =
    useState<Pick<MedicProps, 'name' | 'specialization'>>();

  async function loadMedics() {
    const {data} = await MedicsService.listAll();

    return data;
  }

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
        <>
          {!isLoading && !error && (
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.name}
              ListEmptyComponent={<Text>vazia</Text>}
              ItemSeparatorComponent={Separator}
            />
          )}

          {!isLoading && error && (
            <Text>Ocorreu um erro ao obter os médicos cadastrados</Text>
          )}
        </>
      </MedicListContainer>

      <AppointmentModal selectedMedic={selectedMedic} />
    </Container>
  );
}
