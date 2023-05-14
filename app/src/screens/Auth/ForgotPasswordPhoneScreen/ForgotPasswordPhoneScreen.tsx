import {useForm} from 'react-hook-form';

import ViewWrapper from '@components/atomic/ViewWrapper';
import {Heading} from '@components/atomic/Heading';
import {ControlledTextInput} from '@components/Controller/ControlledTextInput';
import {Button} from '@components/atomic/Button';
import {FormWrapper} from './styles';
import { useNavigation } from '@react-navigation/native';

interface ForgotPasswordEmailSchema {
  phone: string;
}

export function ForgotPasswordPhoneScreen() {
  const navigation = useNavigation()

  const { control } = useForm<ForgotPasswordEmailSchema>();

  return (
    <ViewWrapper>
      <Heading
        title="Recuperação de senha"
        subtitle="Ops, não se preucupe!! Insira seu endereço de telefone para
      corrigir o problema."
        hasBackButton
      />
      <FormWrapper>
        <ControlledTextInput
          label="Telefone"
          name="phone"
          handleResetField={name => {}}
          control={control}
        />

        <Button
          title="Enviar"
          size="5X"
          block
          onPress={() => navigation.navigate('auth-code-validation')}
        />
      </FormWrapper>
    </ViewWrapper>
  );
}
