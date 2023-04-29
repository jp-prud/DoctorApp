import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import {Heading} from '@components/atomic/Heading';
import {AuthRedirectTextPage} from '@components/AuthRedirectTextPage';
import {Button} from '@components/atomic/Button';

import {Container, Form, ButtonWrapper} from './styles';
import React from 'react';
import {ControlledTextInput} from '@components/Controller/ControlledTextInput';
import {useAuthContext} from '@context/AuthContext';
interface LoginFormProps {
  email: string;
  password: string;
}

const formSchema = Yup.object().shape({
  email: Yup.string()
    .required('Você deve inserir um endereço de e-mail.')
    .email('Este e-mail é inválido.'),
  password: Yup.string()
    .required('Você deve inserir uma senha.')
    .min(6, 'Sua senha deve ter 6 ou mais dígitos.'),
});

export function AccountScreen() {
  const {authLoading, loginConsumer} = useAuthContext();

  const {control, handleSubmit} = useForm<LoginFormProps>({
    mode: 'onBlur',
    resolver: yupResolver(formSchema),
  });

  function handleClickSubmit() {
    loginConsumer();
  }

  return (
    <Container>
      <Heading
        content="Bem-vindo(a) de volta!"
        size="XXL"
        subtitle="Não se preocupe! Insira o endereço de e-mail vinculado à sua conta."
      />

      <Form>
        <ControlledTextInput
          control={control}
          rules={{
            required: 'Você deve inserir um endereço de e-mail',
          }}
          name="email"
          label="E-mail"
          placeholder="Endereço de e-mail"
          inputMode="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />

        <ControlledTextInput
          name="password"
          control={control}
          rules={{
            required: 'sua senha deve conter ao menos 6 dígitos',
          }}
          placeholder="Digite sua senha"
          label="Senha"
          textContentType="password"
          secureTextEntry
          isSibling
        />

        <ButtonWrapper>
          <Button
            title="Entrar"
            size="5X"
            variant="solid"
            block
            isLoading={authLoading}
            onPress={handleSubmit(handleClickSubmit)}
          />
        </ButtonWrapper>
      </Form>

      <AuthRedirectTextPage
        description="Não tem uma conta ?"
        toScreen={{
          text: 'Cadastre-se',
          path: 'register',
        }}
      />
    </Container>
  );
}
