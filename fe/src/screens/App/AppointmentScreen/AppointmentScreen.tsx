import { Heading } from "../../../components/atomic/Heading/Heading";

import AppointmentIcon from "../../../assets/images/icons/menu.svg";
import { Table, TableColumn } from "../../../components/Table/Table";
import { useQuery } from "react-query";
import { RenderIf } from "../../../components/RenderIf/RenderIf";
import Spinner from "../../../components/atomic/Spinner/Spinner";
import { Text } from "../../../components/atomic/Text";

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

      {error && <Text>Erro ao obter os atendimentos</Text>}

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
              onClick: () => console.log("teste"),
            }}
            handleClickEdit={(entity: Appointment) => {
              throw new Error("Function not implemented.");
            }}
            handleClickDelete={(entity: Appointment) => {
              throw new Error("Function not implemented.");
            }}
          />
        }
      />
    </>
  );
}
