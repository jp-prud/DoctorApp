import {useCallback, useState} from 'react';
import {Alert, View} from 'react-native';

import {useForm, Controller} from 'react-hook-form';

import Input from '@components/atomic/Input';
import {Form} from '@screens/Auth/AccountScreen/styles';
import {FormGroup} from '@components/atomic/FormGroup';
import {Button} from '@components/atomic/Button';

import AppointmentsService from '../../../services/AppointmentsService';
import {MedicProps} from '@types/index';
import DatePicker from 'react-native-date-picker';
import {DATE_STYLES_FORMAT} from '../../../constants';

interface AppointmentFormProps {
  handleNextStep(): void;
  context: {
    selectedMedic: Pick<MedicProps, 'name' | 'specialization'>;
  };
}

interface AppointmentoFormInputs {
  address: string;
  date: string;
}

export function AppointmentForm({
  handleNextStep,
  context: {selectedMedic},
}: AppointmentFormProps) {
  const [formIsLoading, setFormIsLoading] = useState(false);
  const [openDateModal, setOpenDateModal] = useState(false);
  const [date, setDate] = useState(new Date());

  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<AppointmentoFormInputs>();

  const onSubmit = useCallback(async (formData: AppointmentoFormInputs) => {
    setFormIsLoading(true);

    try {
      await AppointmentsService.createAppointment({
        medicData: {
          name: selectedMedic.name,
          specialiation: selectedMedic.specialization,
        },
        address: formData.address,
        date,
      });

      handleNextStep();

      reset();
    } catch (error) {
      Alert.alert('Erro');

      console.log(error);
    } finally {
      setFormIsLoading(false);
    }
  }, []);

  const handleOpenDateModal = useCallback(() => {
    setOpenDateModal(true);
  }, [setDate, setOpenDateModal]);

  return (
    <Form>
      <Controller
        control={control}
        rules={{
          required: 'Você deve informar um endereço',
        }}
        render={({field: {onChange, value}}) => (
          <FormGroup label="Endereço" error={errors.address}>
            <Input
              placeholder="Endereço"
              onChangeText={onChange}
              value={value}
              textContentType="fullStreetAddress"
            />
          </FormGroup>
        )}
        name="address"
      />

      <Controller
        name="date"
        control={control}
        // rules={{
        //   required: 'Você deve informar um horário',
        // }}
        render={() => (
          <FormGroup label="Horário" error={errors.date}>
            <Input
              placeholder="Horário"
              onFocus={handleOpenDateModal}
              onPress={handleOpenDateModal}
              showSoftInputOnFocus={false}
              value={date.toLocaleString('pt-BR', DATE_STYLES_FORMAT)}
            />

            <DatePicker
              modal
              mode="time"
              title="Horário de atendimento"
              confirmText="Confirmar"
              cancelText="Cancelar"
              date={date}
              open={openDateModal}
              onConfirm={date => {
                setOpenDateModal(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpenDateModal(false);
              }}
            />
          </FormGroup>
        )}
      />

      <View styles={{marginTop: 8}}>
        <Button
          onPress={handleSubmit(onSubmit)}
          title="Salvar"
          size="5X"
          variant="solid"
          isLoading={formIsLoading}>
          Salvar
        </Button>
      </View>
    </Form>
  );
}
