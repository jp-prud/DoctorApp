import {TextInputProps} from 'react-native';

import {Controller, UseControllerProps, FieldValues} from 'react-hook-form';

import {FormGroup, FormGroupProps} from '@components/atomic/FormGroup';

import Input from '@components/atomic/Input';

import {InputWrapper, ButtonContainer} from './styles';

import ClearIcon from '@assets/icons/cross.svg';

import {useTheme} from 'styled-components/native';

interface ControlledTextInputPropsCustom {
  handleResetField(name: string): void;
}

export function ControlledTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  label,
  handleResetField,
  ...textInputProps
}: UseControllerProps<FormType> &
  TextInputProps &
  ControlledTextInputPropsCustom &
  Pick<FormGroupProps, 'label'>) {
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
              onChangeText={onChange}
              value={value}
              error={fieldState?.error}
              placeholderTextColor={
                fieldState.error ? theme.COLORS.RED : theme.COLORS.GRAY_400
              }
              {...textInputProps}
            />

            {value && (
              <ButtonContainer onPress={() => handleResetField(name)}>
                <ClearIcon />
              </ButtonContainer>
            )}
          </InputWrapper>
        </FormGroup>
      )}
    />
  );
}
