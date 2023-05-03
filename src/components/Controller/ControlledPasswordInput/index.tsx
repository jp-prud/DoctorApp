import {TextInputProps} from 'react-native';

import {Controller, UseControllerProps, FieldValues} from 'react-hook-form';

import {FormGroup, FormGroupProps} from '@components/atomic/FormGroup';

import Input from '@components/atomic/Input';

import {InputWrapper, ButtonContainer} from './styles';

import EyeOffIcon from '@assets/icons/eye-off.svg';
import EyeShowIcon from '@assets/icons/eye-show.svg';

import {useTheme} from 'styled-components/native';
import {useState} from 'react';

export function ControlledPasswordInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  label,
  ...textInputProps
}: UseControllerProps<FormType> &
  TextInputProps &
  Pick<FormGroupProps, 'label'>) {
  const [visiblePassword, setVisiblePassword] = useState(false);

  function handleToggleVisibilityPassword() {
    setVisiblePassword(prevState => !prevState);
  }

  const theme = useTheme();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, value}, fieldState}) => (
        <FormGroup error={fieldState.error} label={label}>
          <InputWrapper>
            <Input
              textContentType="password"
              secureTextEntry={!visiblePassword}
              onChangeText={onChange}
              value={value}
              error={fieldState?.error}
              placeholderTextColor={
                fieldState.error ? theme.COLORS.RED : theme.COLORS.GRAY_400
              }
              {...textInputProps}
            />

            {value && (
              <ButtonContainer onPress={() => handleToggleVisibilityPassword()}>
                {visiblePassword ? <EyeShowIcon /> : <EyeOffIcon />}
              </ButtonContainer>
            )}
          </InputWrapper>
        </FormGroup>
      )}
    />
  );
}
