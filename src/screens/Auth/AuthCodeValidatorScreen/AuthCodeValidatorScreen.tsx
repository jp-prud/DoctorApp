import {useNavigation} from '@react-navigation/native';

import ViewWrapper from '@components/atomic/ViewWrapper';
import {Heading} from '@components/atomic/Heading';
import {Text} from '@components/atomic/Text';

import {CodeInput, CodeInputWrapper} from './styles';
import {Button} from '@components/atomic/Button';
import {View} from 'react-native';

export function AuthCodeValidatorScreen() {
  const navigation = useNavigation();

  return (
    <ViewWrapper>
      <Heading
        title="Validação de código"
        subtitle="Copie o código de verificação que acabamos de lhe enviar para iniciar a recuperação da senha."
        hasBackButton
      />

      <CodeInputWrapper>
        <CodeInput />
        <CodeInput />
        <CodeInput />
        <CodeInput />
      </CodeInputWrapper>

      <View style={{marginBottom: 36}}>
        <Text align="center">
          Não recebeu o código ?{' '}
          <Text color="BLUE" weight="600">
            Reenviar.
          </Text>
        </Text>
      </View>

      <Button
        title="Validar"
        size="5X"
        block
        onPress={() => navigation.navigate('new-password')}
      />
    </ViewWrapper>
  );
}
