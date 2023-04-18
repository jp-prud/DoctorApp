import {useState, useCallback} from 'react';

import {FlatList, ListRenderItemInfo} from 'react-native';

import {MedicCard} from '@components/MedicCard';
import {CategoriesFilter} from './components/CategoriesFilter/index';
import Separator from '@components/atomic/Separator';
import {Text} from '@components/atomic/Text';
// import {NavBar} from '@components/NavBar';
import {AppointmentModal} from '@components/AppointmentModal';

import {MedicProps} from 'src/@types';
import {Container, MedicListContainer} from './styles';
import medics from 'src/data/Medics';

import {useModalContext} from '@context/ModalContext';

export default function Home() {
  const [selectedMedic, setSelectedMedic] =
    useState<Pick<MedicProps, 'name' | 'specialization'>>();

  const {handleClickOpenModal} = useModalContext();

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
      <>
        <Text size="MD" opacity={0.9}>
          Bem-vindo(a) ao
        </Text>

        <Text size="XL" weight={800}>
          DOCTOR
          <Text size="XL">APP</Text>
        </Text>
      </>

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

      {/* <NavBar /> */}
    </Container>
  );
}
