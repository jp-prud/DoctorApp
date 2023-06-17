import {useState} from 'react';

import {Modal, Platform, TouchableOpacity} from 'react-native';

import {useModalContext} from '@context/ModalContext/index';

import {Text} from '@components/atomic/Text';
import {Close} from '@components/atomic/Icons/CloseIcon';
import {Button} from '@components/atomic/Button';
import {RenderIfElse} from '@components/atomic/RenderIfElse';

import {AppointmentForm} from './Form';

import {
  Overlay,
  Header,
  ModalBody,
  Content,
  HeaderContent,
  Footer,
  DescriptionDoctor,
  ReturnStep,
} from './styles';

import {DoctorProps} from '../../@types/index';

import LikeIcon from '@assets/icons/like.svg';
import React from 'react';

type Step = 'form' | 'success';

interface AppointmentModalProps {
  selectedDoctor: Pick<DoctorProps, 'name' | 'specialization'>;
}

export function AppointmentModal({selectedDoctor}: AppointmentModalProps) {
  const [currentStep, setCurrentStep] = useState<Step>('form');

  const {isOpenModal, handleClickCloseModal} = useModalContext();

  function handleToggleCurrentStep() {
    setCurrentStep(prevState => (prevState === 'form' ? 'success' : 'form'));
  }

  function renderSuccessStep() {
    return (
      <>
        <Content>
          <LikeIcon />

          <HeaderContent>
            <Text size="XXXL" align="center" color="GRAY_500" weight="700">
              Muito Obrigado!
            </Text>

            <Text size="LG" align="center" color="GRAY_400">
              Seu agendamento foi concluído
            </Text>
          </HeaderContent>

          <DescriptionDoctor align="center" size="SM" color="GRAY_400">
            Atendimento com {selectedDoctor?.name} em 18 de Abril de 2023 as
            16:00.
          </DescriptionDoctor>
        </Content>

        <Footer>
          <Button
            onPress={() => {
              handleClickCloseModal();

              setCurrentStep('form');
            }}
            size="5X"
            variant="solid"
            title="Confirmar"
            block
          />

          <ReturnStep
            size="SM"
            variant="link"
            title="Editar seu atendimento"
            onPress={() => handleToggleCurrentStep()}
          />
        </Footer>
      </>
    );
  }

  return (
    <Modal
      transparent
      animationType="fade"
      visible={isOpenModal}
      onRequestClose={handleClickCloseModal}>
      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <ModalBody>
          <Header>
            <Text weight="600">Informações do Atendimento</Text>

            <TouchableOpacity onPress={handleClickCloseModal}>
              <Close color="#666" />
            </TouchableOpacity>
          </Header>

          <RenderIfElse
            condition={currentStep === 'form'}
            renderIf={
              <AppointmentForm
                handleNextStep={handleToggleCurrentStep}
                context={{
                  selectedDoctor,
                }}
              />
            }
            renderElse={renderSuccessStep()}
          />
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
