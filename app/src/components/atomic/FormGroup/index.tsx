import React from 'react';
import {FieldError} from 'react-hook-form';
import {Text} from '../Text';

import {Container, InputTextHelper} from './styles';

export type FormGroupProps = {
  error?: FieldError;
  label: string;
  children: any;
};

export function FormGroup({error, label, children}: FormGroupProps) {
  return (
    <Container>
      <Text color="GRAY_500" weight="500" style={{marginBottom: 6}}>
        {label}
      </Text>

      {children}

      {error?.message && <InputTextHelper>{error.message}</InputTextHelper>}
    </Container>
  );
}
