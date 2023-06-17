import { useState } from "react";

import { useQuery } from "react-query";

import { Heading } from "../../../components/atomic/Heading/Heading";

import { AppointmentBoard } from "./components/Appointment/Board/Board";

import ClockIcon from "../../../assets/images/icons/IOS/clock.svg";
import CheckIcon from "../../../assets/images/icons/IOS/check.svg";
import MedicIcon from "../../../assets/images/icons/IOS/medic.svg";
import MoneyIcon from "../../../assets/images/icons/IOS/money.svg";

import HomeIcon from "../../../assets/images/icons/home.svg";

import { BoardWrapper } from "./styles";
import Spinner from "../../../components/atomic/Spinner/Spinner";

import { Appointment, Status } from "../AppointmentScreen/AppointmentScreen";
import toast from "../../../utils/toast";
import { AppointmentModal } from "./components/Appointment/Modal/Modal";

export function HomeScreen() {
  const { data, isLoading, error } = useQuery("users", loadAppointments);

  const [selectedAppointment, setSelectedAppointment] = useState<Appointment>();

  async function loadAppointments() {
    const response = await fetch(
      "https://api-production-160a.up.railway.app/appointments"
    );

    return await response.json();
  }

  function filterCurrentStatusAppointmentBoard(filterStatus: Status) {
    return data?.filter(
      ({ status: currentStatus }: Appointment) => currentStatus === filterStatus
    );
  }

  return (
    <>
      <Heading
        title="Home"
        description="Acompanhe os atendimentos dos clientes"
        icon={HomeIcon}
      />

      {error &&
        toast({
          message: {
            text: "Erro ao obter os clientes",
            type: "danger",
          },
        })}

      {isLoading && <Spinner />}

      {data?.length > 0 && !isLoading && (
        <BoardWrapper>
          <AppointmentBoard
            title="Aguardando"
            icon={ClockIcon}
            appointments={filterCurrentStatusAppointmentBoard("Aguardando")}
            onSelectAppointmentModal={setSelectedAppointment}
          />

          <AppointmentBoard
            title="Em Atendimento"
            icon={MedicIcon}
            appointments={filterCurrentStatusAppointmentBoard("Em_Atendimento")}
            onSelectAppointmentModal={setSelectedAppointment}
          />

          <AppointmentBoard
            title="Pagamento"
            icon={MoneyIcon}
            appointments={filterCurrentStatusAppointmentBoard(
              "Aguardando_Pagamento"
            )}
            onSelectAppointmentModal={setSelectedAppointment}
          />

          <AppointmentBoard
            title="Finalizado"
            icon={CheckIcon}
            appointments={filterCurrentStatusAppointmentBoard("Finalizado")}
            onSelectAppointmentModal={setSelectedAppointment}
          />
        </BoardWrapper>
      )}

      {selectedAppointment && (
        <AppointmentModal appointment={selectedAppointment} />
      )}
    </>
  );
}
