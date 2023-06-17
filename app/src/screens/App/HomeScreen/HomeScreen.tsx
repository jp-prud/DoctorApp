import {useState, useCallback} from 'react';

import {FlatList, ListRenderItemInfo, View} from 'react-native';

import {useQuery} from '@tanstack/react-query';

import {DoctorCard} from '@components/DoctorCard/DoctorCard';
import {CategoriesFilter} from './components/CategoriesFilter/index';
import Separator from '@components/atomic/Separator';
import {Text} from '@components/atomic/Text';
import {AppointmentModal} from '@components/AppointmentModal/AppointmentModal';

import {useModalContext} from '@context/ModalContext';
import {useNavigation} from '@react-navigation/native';

import DoctorsService from '@services/DoctorsService';

import {DoctorProps} from 'src/@types';
import {
  Container,
  Header,
  NotificationButton,
  DoctorListContainer,
} from './styles';

import BellIcon from '@assets/icons/bell.svg';

export function HomeScreen() {
  const navigation = useNavigation();
  const {handleClickOpenModal} = useModalContext();

  const {data, isLoading, error} = useQuery<DoctorProps[]>(
    ['doctors'],
    loadDoctors,
  );

  const [selectedDoctor, setSelectedDoctor] =
    useState<Pick<DoctorProps, 'name' | 'speciality'>>();

  async function loadDoctors() {
    const {data} = await DoctorsService.listAll();

    return data;
  }

  function renderItem({item}: ListRenderItemInfo<DoctorProps>) {
    return (
      <DoctorCard
        {...item}
        handleMakeAnAppointment={handleClickOpenAppoinmtmentModal}
      />
    );
  }

  const handleClickOpenAppoinmtmentModal = useCallback(
    (doctorData: Pick<DoctorProps, 'name' | 'speciality'>) => {
      setSelectedDoctor(doctorData);

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

      <DoctorListContainer>
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
      </DoctorListContainer>

      <AppointmentModal selectedDoctor={selectedDoctor} />
    </Container>
  );
}
