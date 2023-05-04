import {View} from 'react-native';

import {useForm} from 'react-hook-form';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useAuthContext} from '@context/AuthContext';
import {useTheme} from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

import {Button} from '@components/atomic/Button';
import {Heading} from '@components/atomic/Heading';
import {AuthRedirectTextPage} from '@components/AuthRedirectTextPage';
import {ControlledTextInput} from '@components/Controller/ControlledTextInput';
import {ControlledPasswordInput} from '@components/Controller/ControlledPasswordInput';
import {Text} from '@components/atomic/Text';

import {Container, FooterWrapper, Form} from './styles';

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

  const navigation = useNavigation();
  const theme = useTheme();

  const {control, handleSubmit, resetField} = useForm<RegisterFormProps>({
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
        hasBackButton
      />

      <Form>
        <ControlledTextInput
          control={control}
          rules={{
            required: true,
          }}
          label="Seu nome completo"
          name="username"
          placeholder="Nome Completo"
          handleResetField={resetField}
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
          handleResetField={resetField}
        />

        <ControlledPasswordInput
          control={control}
          rules={{
            required: true,
          }}
          name="password"
          label="Senha"
          placeholder="Digite sua senha"
        />

        <FooterWrapper>
          <Button
            title="Registrar"
            variant="solid"
            size="5X"
            block
            isLoading={authLoading}
            onPress={handleSubmit(handleClickSubmit)}
          />

          <View style={{width: 260}}>
            <Text align="center" size="SM" style={{marginTop: theme.SIZE.MD}}>
              Ao clicar em "Registar" você aceita nossos{' '}
              <Text
                size="SM"
                weight="700"
                color="BLUE"
                onPress={() => navigation.navigate('terms-and-conditions')}>
                Termos e condições
              </Text>
            </Text>
          </View>
        </FooterWrapper>
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
