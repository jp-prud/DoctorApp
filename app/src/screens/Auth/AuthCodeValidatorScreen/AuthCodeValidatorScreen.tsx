import {useRef, MutableRefObject} from 'react';
import {View, TextInputProps} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import ViewWrapper from '@components/atomic/ViewWrapper';
import {Heading} from '@components/atomic/Heading';
import {Text} from '@components/atomic/Text';

import {CodeInput, CodeInputWrapper} from './styles';
import {Button} from '@components/atomic/Button';

type InputCodeRef = HTMLInputElement | null;

interface HandleChangeCodeInputProps {
  text: string;
  previousField?: MutableRefObject<InputCodeRef>;
  nextField?: MutableRefObject<InputCodeRef>;
}

const CODE_INPUT_DEFAULT_PROPS = {
  maxLength: 1,
  keyboardType: 'number-pad',
} as TextInputProps;

export function AuthCodeValidatorScreen() {
  const navigation = useNavigation();

  const firstCodeInput = useRef<InputCodeRef>(null);
  const secondCodeInput = useRef<InputCodeRef>(null);
  const thirtCodeInput = useRef<InputCodeRef>(null);
  const fourCodeInput = useRef<InputCodeRef>(null);

  function handleChangeCodeInput({
    text,
    previousField,
    nextField,
  }: HandleChangeCodeInputProps) {
    text ? nextField?.current?.focus() : previousField?.current?.focus();
  }

  return (
    <ViewWrapper>
      <Heading
        title="Validação de código"
        subtitle="Copie o código de verificação que acabamos de lhe enviar para iniciar a recuperação da senha."
        hasBackButton
      />

      <CodeInputWrapper>
        <CodeInput
          ref={firstCodeInput}
          onChangeText={(text: string) =>
            handleChangeCodeInput({
              text,
              nextField: secondCodeInput,
            })
          }
          {...CODE_INPUT_DEFAULT_PROPS}
        />

        <CodeInput
          ref={secondCodeInput}
          onChangeText={(text: string) =>
            handleChangeCodeInput({
              text,
              previousField: firstCodeInput,
              nextField: thirtCodeInput,
            })
          }
          {...CODE_INPUT_DEFAULT_PROPS}
        />

        <CodeInput
          ref={thirtCodeInput}
          onChangeText={(text: string) =>
            handleChangeCodeInput({
              text,
              previousField: secondCodeInput,
              nextField: fourCodeInput,
            })
          }
          {...CODE_INPUT_DEFAULT_PROPS}
        />

        <CodeInput
          ref={fourCodeInput}
          onChangeText={(text: string) => {
            handleChangeCodeInput({
              text,
              previousField: thirtCodeInput,
            });
          }}
          {...CODE_INPUT_DEFAULT_PROPS}
        />
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
