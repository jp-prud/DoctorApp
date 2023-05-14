import ViewWrapper from '@components/atomic/ViewWrapper';

import {Heading} from '@components/atomic/Heading';
import {ControlledTextInput} from '@components/Controller/ControlledTextInput';
import {Button} from '@components/atomic/Button';
import {FormWrapper} from './styles';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';

interface ForgotPasswordEmailSchema {
  email: string;
}

export function ForgotPasswordEmailScreen() {
  const navigation = useNavigation();

  const {control} = useForm<ForgotPasswordEmailSchema>();

  return (
    <ViewWrapper>
      <Heading
        title="Recuperação de senha"
        subtitle="Ops, não se preucupe!! Insira seu endereço de e-mail para corrigir o problema."
        hasBackButton
      />

      <FormWrapper>
        <ControlledTextInput
          label="E-mail"
          name="email"
          control={control}
          handleResetField={name => {}}
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
