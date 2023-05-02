import ViewWrapper from '@components/atomic/ViewWrapper';

import {ControlledTextInput} from '@components/Controller/ControlledTextInput';
import {Heading} from '@components/atomic/Heading';
import {FormWrapper} from './styles';
import {useForm} from 'react-hook-form';
import {Button} from '@components/atomic/Button';

import {useNavigation} from '@react-navigation/native';

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
        <ControlledTextInput
          control={control}
          label="Nova senha"
          placeholder="Defina uma nova senha"
          handleResetField={() => {}}
          name="password"
        />

        <ControlledTextInput
          control={control}
          label="Confirmar senha"
          placeholder="Confirme a senha"
          handleResetField={() => {}}
          name="confirm_password"
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
