import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {AppointmentCard} from '../AppointmentCard';

import {AppointmentDTO} from '@services/AppointmentsService';
import {ThemeProvider} from 'styled-components/native';

import theme from '@theme/index';

describe('Appointment Card', () => {
  const mockAppointment: AppointmentDTO = {
    _id: '1',
    doctor: {
      name: 'Joselito',
    },
    patient: {
      name: 'João Pedro',
    },
    address: 'Rua XPTO',
    description: 'Descrição teste',
    appointmentTime: '1684495643728',
    status: 'Aguardando',
  };

  function renderValidAppointment() {
    const handleSelectAppointment = jest.fn();

    return (
      <ThemeProvider theme={theme}>
        <AppointmentCard
          appointment={mockAppointment}
          handleSelectAppointment={handleSelectAppointment}
        />
      </ThemeProvider>
    );
  }

  describe('Appointment was passed', () => {
    it('Show the component', () => {
      const {getByTestId} = render(renderValidAppointment());

      expect(getByTestId('Appointment-Card')).toBeTruthy();
    });

    it('Should call handleSelectAppointment when selected', () => {
      const {getByTestId} = render(renderValidAppointment());

      fireEvent.press(getByTestId('Appointment-Card'));
    });
  });
});
