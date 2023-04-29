import {Alert} from 'react-native';
import {useForm} from 'react-hook-form';

import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

import {Button} from '@components/atomic/Button';
import {Container, ButtonWrapper, Form} from './styles';

import {Heading} from '@components/atomic/Heading';
import {AuthRedirectTextPage} from '@components/AuthRedirectTextPage';

import {ControlledTextInput} from '@components/Controller/ControlledTextInput';

import {useAuthContext} from '@context/AuthContext';

interface RegisterFormProps {
  username: string;
  email: string;
  password: string;
}

const formSchema = Yup.object().shape({
  username: Yup.string().required('Você deve inserir um nome de usuário.'),
  email: Yup.string()
    .required('Você deve inserir um endereço de email.')
    .email('Este email é inválido.'),
  password: Yup.string()
    .required('Você deve inserir uma senha.')
    .min(6, 'Sua senha deve ter 6 ou mais dígitos'),
});

export function RegisterScreen() {
  const {authLoading, loginConsumer} = useAuthContext();

  const {control, handleSubmit} = useForm<RegisterFormProps>({
    mode: 'onBlur',
    resolver: yupResolver(formSchema),
  });

  function handleClickSubmit() {
    loginConsumer();
  }

  return (
    <Container>
      <Heading title="Bem-vindo(a) de volta!" size="XXL" />

      <Form>
        <ControlledTextInput
          control={control}
          rules={{
            required: true,
          }}
          label="Seu nome completo"
          name="username"
          placeholder="Nome Completo"
        />

        <ControlledTextInput
          control={control}
          rules={{
            required: true,
          }}
          name="email"
          label="E-mail"
          placeholder="Endereço de e-mail"
          inputMode="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          isSibling
        />

        <ControlledTextInput
          control={control}
          rules={{
            required: true,
          }}
          name="password"
          label="Senha"
          placeholder="Digite sua senha"
          textContentType="password"
          secureTextEntry
          isSibling
        />

        <ButtonWrapper>
          <Button
            title="Registrar"
            variant="solid"
            size="5X"
            block
            isLoading={authLoading}
            onPress={handleSubmit(handleClickSubmit)}
          />
        </ButtonWrapper>
      </Form>

      <AuthRedirectTextPage
        description="Já possui uma conta ?"
        toScreen={{
          text: 'Conecte-se',
          path: 'account',
        }}
      />
    </Container>
  );
}
