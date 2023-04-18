import React, {useState, useEffect} from 'react';

import {
  Alert,
  FlatList,
  ActivityIndicator,
  ListRenderItemInfo,
} from 'react-native';

import AppointmentsService, {
  AppointmentDTO,
} from 'src/services/AppointmentsService';

import {AppointmentCard} from '@components/AppointmentCard';
import {Text} from '@components/atomic/Text';

import {Container} from './styles';
import Separator from '@components/atomic/Separator';

export default function Appointment() {
  const [appointmentList, setAppointmentList] = useState<AppointmentDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const appointments = await AppointmentsService.listAppointments();

        setAppointmentList(appointments);
      } catch (error) {
        Alert.alert('Erro');

        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [setAppointmentList, setIsLoading]);

  function renderAppointmentCard({item}: ListRenderItemInfo<AppointmentDTO>) {
    return <AppointmentCard {...item} />;
  }

  return (
    <Container>
      {isLoading ? (
        <ActivityIndicator color="#44404f" />
      ) : (
        <>
          <Text size="XL" weight="600" styles={{marginBotton: 24}}>
            Seus atendimentos
          </Text>

          <FlatList
            keyExtractor={item => `${item.address}-${Math.random()}`}
            data={appointmentList}
            renderItem={renderAppointmentCard}
            ItemSeparatorComponent={Separator}
            ListEmptyComponent={<Text>Sem atendimentos agendados!</Text>}
          />
        </>
      )}
    </Container>
  );
}
