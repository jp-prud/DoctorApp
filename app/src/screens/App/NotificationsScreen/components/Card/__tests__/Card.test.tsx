import React from 'react';
import {render} from '@testing-library/react-native';

import {ThemeProvider} from 'styled-components/native';

import theme from '@theme/index';

import {Card} from '../Card';

describe('Card Component', () => {
  it('should render component', () => {
    const {getByTestId} = render(
      <ThemeProvider theme={theme}>
        <Card title="Consulta agendada" description="Consulta agendada teste" />
      </ThemeProvider>,
    );

    expect(getByTestId('notification-card')).toBeTruthy();
  });
});
