import { createContext, useCallback, useContext, useState } from "react";
import { Appointment } from "../../screens/App/AppointmentScreen/AppointmentScreen";

interface AppointmentContextProps {
  selectedAppointment: Appointment | null;
  handleSelectedAppointment(appointment: Appointment | null): void;
}

const AppointmentContext = createContext({} as AppointmentContextProps);

export function AppointmentContextProvider({
  children,
}: {
  children: React.ReactNode | any;
}) {
  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);

  const handleSelectedAppointment = useCallback(
    (appointment: Appointment | null) => {
      setSelectedAppointment(appointment);
    },
    []
  );

  return (
    <AppointmentContext.Provider
      value={{
        selectedAppointment,
        handleSelectedAppointment,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointmentContext() {
  return useContext(AppointmentContext);
}
