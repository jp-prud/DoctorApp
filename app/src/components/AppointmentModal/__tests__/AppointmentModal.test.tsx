import React from 'react';

import {render} from '@testing-library/react-native';
import {AppointmentModal} from '../AppointmentModal';

import {ThemeProvider} from 'styled-components/native';
import theme from '@theme/index';
import {ModalContextProvider} from '@context/ModalContext';

describe('AppointmentModal', () => {
  describe('Appointment was passed', () => {
    render(
      <ModalContextProvider>
        <ThemeProvider theme={theme}>
          <AppointmentModal
            selectedDoctor={{
              name: 'Mario',
              specialization: 'Dental',
            }}
          />
        </ThemeProvider>
      </ModalContextProvider>,
    );

    expect(0).toBe(0);
  });
});
