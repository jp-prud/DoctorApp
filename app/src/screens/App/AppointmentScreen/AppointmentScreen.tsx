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
import Separator from '@components/atomic/Separator';
import {Heading} from '@components/atomic/Heading';
import {RenderIfElse} from '@components/atomic/RenderIfElse';
import {EmptyState} from '@components/EmptyState';

import {Container} from './styles';

export function AppointmentScreen() {
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
      <RenderIfElse
        condition={isLoading}
        renderIf={<ActivityIndicator color="#44404f" />}
        renderElse={
          <>
            <Heading title="Meus Atendimentos" size="XL" />

            <FlatList
              keyExtractor={item => `${item.address}-${Math.random()}`}
              data={appointmentList}
              renderItem={renderAppointmentCard}
              ItemSeparatorComponent={Separator}
              ListEmptyComponent={
                <EmptyState
                  title="Seu calendário está vazio"
                  description="Não há consultas marcadas no calendário"
                  imageContext="calendar"
                  button={{
                    label: 'Marcar uma consulta',
                    redirectPage: 'teste',
                  }}
                />
              }
              contentContainerStyle={{
                flex: 1,
                justifyContent:
                  appointmentList.length > 0 ? 'flex-start' : 'center',
              }}
            />
          </>
        }
      />
    </Container>
  );
}
