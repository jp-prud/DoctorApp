import { Heading } from "../../../components/atomic/Heading/Heading";

import AppointmentIcon from "../../../assets/images/icons/menu.svg";
import { Table, TableColumn } from "../../../components/Table/Table";
import { useQuery } from "react-query";
import { RenderIf } from "../../../components/RenderIf/RenderIf";
import Spinner from "../../../components/atomic/Spinner/Spinner";
import toast from "../../../utils/toast";
import { EditAppointmentModal } from "./components/EditAppointmentModal/EditAppointmentModal";
import { useModalContext } from "../../../context/ModalContext/ModalContext";

export type Status =
  | "Aguardando"
  | "Marcado"
  | "Em_Atendimento"
  | "Aguardando_Pagamento"
  | "Finalizado";

export interface Appointment {
  _id: string;
  patient: {
    name: string;
  };
  doctor: {
    name: string;
  };
  status: Status;
  description: string;
  appointmentTime: string;
  address: string;
}

export function AppointmentScreen() {
  const { data, isLoading, error } = useQuery("users", loadAppointments);
  const { handleOpenModal } = useModalContext();

  const columns: TableColumn<Appointment>[] = [
    { title: "Paciente", render: (data) => data?.patient?.name },
    { title: "Médico", render: (data) => data?.doctor?.name },
    { title: "Data de Atendimento", render: (data) => data.appointmentTime },
    { title: "Status", render: (data) => data.status },
  ];

  async function loadAppointments() {
    const response = await fetch(
      "https://api-production-160a.up.railway.app/appointments"
    );

    return await response.json();
  }

  return (
    <>
      <Heading
        title="Atendimentos"
        description="Gerencie os atendimentos do seu estabelecimento"
        icon={AppointmentIcon}
      />

      {error &&
        toast({
          message: {
            text: "Erro ao obter os atendimentos",
            type: "danger",
          },
        })}

      {isLoading && <Spinner size={32} />}

      <RenderIf
        condition={data?.length > 0 && !isLoading}
        renderIf={
          <Table<Appointment>
            title="Atendimentos"
            data={data}
            columns={columns}
            headerButton={{
              label: "Novo atendimento",
              onClick: () => toast({ message: { text: "Clicou" } }),
            }}
            handleClickEdit={() => handleOpenModal()}
            handleClickDelete={() => console.log()}
          />
        }
      />

      <EditAppointmentModal />
    </>
  );
}
