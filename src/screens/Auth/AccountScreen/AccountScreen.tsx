import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import {Heading} from '@components/atomic/Heading';
import {AuthRedirectTextPage} from '@components/AuthRedirectTextPage';
import {Button} from '@components/atomic/Button';
import {ControlledTextInput} from '@components/Controller/ControlledTextInput';
import {useAuthContext} from '@context/AuthContext';
import {Text} from '@components/atomic/Text';

import {Container, Form, FooterWrapper} from './styles';

import {useNavigation} from '@react-navigation/native';

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

  const navigation = useNavigation();

  const {control, handleSubmit, resetField} = useForm<LoginFormProps>({
    mode: 'onChange',
    resolver: yupResolver(formSchema),
  });

  function handleClickSubmit() {
    loginConsumer();
  }

  return (
    <Container>
      <Heading
        title="Boas vindas!"
        subtitle="Para continuarmos, precisamos que você insira seus dados de acesso"
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
          handleResetField={resetField}
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
          handleResetField={resetField}
        />

        <FooterWrapper>
          <Button
            title="Entrar"
            size="5X"
            variant="solid"
            block
            isLoading={authLoading}
            onPress={handleSubmit(handleClickSubmit)}
          />

          <Text>
            Esqueceu a senha ?{' '}
            <Text
              weight="700"
              color="BLUE"
              onPress={() => navigation.navigate('forgot-password')}>
              Recupere-a.
            </Text>
          </Text>
        </FooterWrapper>
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
