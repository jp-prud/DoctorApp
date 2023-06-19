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

import { useAppointmentContext } from "../../../Context/AppointmentContext/AppointmentContext";
import { Text } from "../../../components/atomic/Text";
import Button from "../../../components/atomic/Button/Button";

export function HomeScreen() {
  const { data, isLoading, error } = useQuery("users", loadAppointments);

  const { selectedAppointment, handleSelectedAppointment } =
    useAppointmentContext();

  const [finishAppointmentLoading, setFinishAppointmentLoading] =
    useState(false);

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

  function renderFinishAllAppointments() {
    return (
      <Button
        className="finish-appointments-wrapper"
        onClick={handleClickFinishAllAppointments}
        title="Finalizar atendimentos"
        isLoading={finishAppointmentLoading}
        variant="link"
      />
    );
  }

  async function handleClickFinishAllAppointments() {
    try {
      setFinishAppointmentLoading(true);

      await fetch(
        "https://api-production-160a.up.railway.app/appointments/finishAll",
        {
          method: "post",
        }
      );
    } catch (error) {
      console.log("Ocorreu um erro ao finalizar os atendimentos", { error });

      toast({
        message: {
          text: "Ocorreu um erro ao finalizar os atendimentos",
          type: "danger",
        },
      });
    } finally {
      setFinishAppointmentLoading(false);
    }
  }

  return (
    <>
      <Heading
        title="Home"
        description="Acompanhe os atendimentos dos clientes"
        icon={HomeIcon}
        RightComponent={renderFinishAllAppointments()}
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

      {selectedAppointment && (
        <AppointmentModal appointment={selectedAppointment} />
      )}
    </>
  );
}
