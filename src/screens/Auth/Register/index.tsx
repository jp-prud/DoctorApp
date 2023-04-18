import {Alert} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

import {FormGroup} from '@components/atomic/FormGroup';
import {Button} from '@components/atomic/Button';
import {Container, ButtonWrapper, Form} from './styles';
import Input from '@components/atomic/Input';
import {Heading} from '@components/atomic/Title';
import {AuthRedirectTextPage} from '@components/AuthRedirectTextPage';

interface RegisterFormProps {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const formSchema = Yup.object().shape({
  username: Yup.string().required('Você deve inserir um nome de usuário.'),
  email: Yup.string()
    .required('Você deve inserir um endereço de email.')
    .email('Este email é inválido.'),
  password: Yup.string()
    .required('Você deve inserir uma senha.')
    .min(6, 'Sua senha deve ter 6 ou mais dígitos'),
  confirmPassword: Yup.string()
    .required('As senhas devem ser iguais.')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export default function Register() {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<RegisterFormProps>({
    resolver: yupResolver(formSchema),
  });

  function handleClickSubmit() {
    Alert.alert('Submit');
  }

  return (
    <Container>
      <Heading content="Bem-vindo(a) de volta!" size="XXL" />

      <Form>
        <Controller
          control={control}
          name="username"
          render={({field: {onChange, value}}) => (
            <FormGroup error={errors.username}>
              <Input
                placeholder="Username"
                onChangeText={onChange}
                value={value}
              />
            </FormGroup>
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({field: {onChange, value}}) => (
            <FormGroup error={errors.email} isSibling>
              <Input
                placeholder="Endereço de e-mail"
                onChangeText={onChange}
                value={value}
                inputMode="email"
                textContentType="emailAddress"
                keyboardType="email-address"
              />
            </FormGroup>
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({field: {onChange, value}}) => (
            <FormGroup error={errors.password} isSibling>
              <Input
                placeholder="Senha"
                onChangeText={onChange}
                value={value}
                textContentType="password"
                secureTextEntry
              />
            </FormGroup>
          )}
        />

        <Controller
          control={control}
          name="confirmPassword"
          render={({field: {onChange, value}}) => (
            <FormGroup error={errors.confirmPassword} isSibling>
              <Input
                placeholder="Confirmar senha"
                onChangeText={onChange}
                value={value}
                textContentType="password"
                secureTextEntry
              />
            </FormGroup>
          )}
        />

        <ButtonWrapper>
          <Button
            title="Registrar"
            variant="solid"
            size="5X"
            block
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
