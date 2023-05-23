import { Heading } from "../../../components/atomic/Heading/Heading";

import { AppointmentBoard } from "./components/AppointmentBoard/AppointmentBoard";

import ClockIcon from "../../../assets/images/icons/IOS/clock.svg";
import CheckIcon from "../../../assets/images/icons/IOS/check.svg";
import MedicIcon from "../../../assets/images/icons/IOS/medic.svg";
import MoneyIcon from "../../../assets/images/icons/IOS/money.svg";

import HomeIcon from "../../../assets/images/icons/home.svg";

import { BoardWrapper } from "./styles";
import Spinner from "../../../components/atomic/Spinner/Spinner";
import { Text } from "../../../components/atomic/Text";

import { useQuery } from "react-query";
import { Appointment, Status } from "../AppointmentScreen/AppointmentScreen";

export function HomeScreen() {
  const { data, isLoading, error } = useQuery("users", loadAppointments);

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

      {error && <Text>Não foi possível obter os atendimentos.</Text>}

      {isLoading && <Spinner />}

      {data?.length > 0 && !isLoading && (
        <BoardWrapper>
          <AppointmentBoard
            title="Aguardando"
            icon={ClockIcon}
            appointments={filterCurrentStatusAppointmentBoard("Aguardando")}
          />

          <AppointmentBoard
            title="Em Atendimento"
            icon={MedicIcon}
            appointments={filterCurrentStatusAppointmentBoard("Em_Atendimento")}
          />

          <AppointmentBoard
            title="Pagamento"
            icon={MoneyIcon}
            appointments={filterCurrentStatusAppointmentBoard(
              "Aguardando_Pagamento"
            )}
          />

          <AppointmentBoard
            title="Finalizado"
            icon={CheckIcon}
            appointments={filterCurrentStatusAppointmentBoard("Finalizado")}
          />
        </BoardWrapper>
      )}
    </>
  );
}
