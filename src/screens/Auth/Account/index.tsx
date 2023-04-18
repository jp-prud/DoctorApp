import {Alert} from 'react-native';

import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import {Heading} from '@components/atomic/Title';
import {FormGroup} from '@components/atomic/FormGroup';
import Input from '@components/atomic/Input';
import {AuthRedirectTextPage} from '@components/AuthRedirectTextPage';
import {Button} from '@components/atomic/Button';

import {Container, Form, ButtonWrapper} from './styles';

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

export default function Account() {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginFormProps>({
    resolver: yupResolver(formSchema),
  });

  function handleClickSubmit() {
    Alert.alert('oi');
  }

  return (
    <Container>
      <Heading
        content="Bem-vindo(a) de volta!"
        size="XXL"
        subtitle="Não se preocupe! Insira o endereço de e-mail vinculado à sua conta."
      />

      <Form>
        <Controller
          name="email"
          control={control}
          rules={{
            required: 'Você deve inserir um endereço de e-mail',
          }}
          render={({field: {onChange, value}}) => (
            <FormGroup error={errors.email}>
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
          name="password"
          control={control}
          rules={{
            required: 'sua senha deve conter ao menos 6 dígitos',
          }}
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

        <ButtonWrapper>
          <Button
            title="Entrar"
            size="5X"
            variant="solid"
            block
            onPress={handleSubmit(handleClickSubmit)}
          />
        </ButtonWrapper>
      </Form>

      <AuthRedirectTextPage
        description="Não tem uma conta?"
        toScreen={{
          text: 'Cadastre-se',
          path: 'register',
        }}
      />
    </Container>
  );
}
