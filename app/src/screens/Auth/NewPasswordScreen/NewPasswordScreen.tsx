import {useNavigation} from '@react-navigation/native';
import ViewWrapper from '@components/atomic/ViewWrapper';
import {useForm} from 'react-hook-form';

import {Heading} from '@components/atomic/Heading';
import {FormWrapper} from './styles';
import {Button} from '@components/atomic/Button';
import {ControlledPasswordInput} from '@components/Controller/ControlledPasswordInput';

interface NewPasswordSchema {
  password: string;
  confirm_password: string;
}

export function NewPasswordScreen() {
  const navigation = useNavigation();

  const {control} = useForm<NewPasswordSchema>();

  return (
    <ViewWrapper>
      <Heading
        title="Defina uma nova senha"
        subtitle="Digite sua nova senha abaixo e acesse novamente sua conta."
        hasBackButton
      />

      <FormWrapper>
        <ControlledPasswordInput
          name="password"
          control={control}
          rules={{
            required: 'sua senha deve conter ao menos 6 dígitos',
          }}
          placeholder="Digite sua senha"
          label="Senha"
        />

        <ControlledPasswordInput
          name="confirm-password"
          control={control}
          rules={{
            required: 'sua senha deve conter ao menos 6 dígitos',
          }}
          placeholder="Confirme sua senha"
          label="Confirmar senha"
        />
      </FormWrapper>

      <Button
        title="Redefinir senha"
        size="5X"
        block
        onPress={() => {
          navigation.navigate('account');
          navigation.reset({
            index: 1,
            routes: [
              {
                name: 'account',
              },
            ],
          });
        }}
      />
    </ViewWrapper>
  );
}
