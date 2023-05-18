import { Heading } from "../../../components/atomic/Heading/Heading";

import { AppointmentBoard } from "./components/AppointmentBoard/AppointmentBoard";

import ClockIcon from "../../../assets/images/icons/IOS/clock.svg";
import CheckIcon from "../../../assets/images/icons/IOS/check.svg";
import MedicIcon from "../../../assets/images/icons/IOS/medic.svg";
import MoneyIcon from "../../../assets/images/icons/IOS/money.svg";

import HomeIcon from "../../../assets/images/icons/home.svg";

import { BoardWrapper } from "./styles";

export function HomeScreen() {
  return (
    <>
      <Heading
        title="Home"
        description="Acompanhe os atendimentos dos clientes"
        icon={HomeIcon}
      />

      <BoardWrapper>
        <AppointmentBoard title="Aguardando" icon={ClockIcon} />

        <AppointmentBoard title="Em Atendimento" icon={MedicIcon} />

        <AppointmentBoard title="Pagamento" icon={MoneyIcon} />

        <AppointmentBoard title="Finalizado" icon={CheckIcon} />
      </BoardWrapper>
    </>
  );
}
