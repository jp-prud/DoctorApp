import { useCallback, useState } from "react";

import { useQuery } from "react-query";

import { Heading } from "../../../components/atomic/Heading/Heading";
import { Table, TableColumn } from "../../../components/Table/Table";
import { Text } from "../../../components/atomic/Text";
import { useModalContext } from "../../../Context/ModalContext/ModalContext";
import { DeleteFormModal } from "./components/DeleteFormModal/DeleteFormModal";
import { EditFormModal } from "./components/EditFormModal/EditFormModal";
import { RenderIf } from "../../../components/RenderIf/RenderIf";
import { CreateUserModal } from "./components/CreateUserModal/CreateUserModal";
import Spinner from "../../../components/atomic/Spinner/Spinner";

import UserIcon from '../../../assets/images/icons/users.svg'

export interface User {
  _id: string;
  name: string;
  email: string;
  cpf: string;
  address: string;
  phone: string;
}

type SelectedOption = "new-user" | "edit" | "delete";

export function UsersScreen() {
  const [selectedUser, setSelectedUser] = useState<User>({} as User);
  const [selectedOption, setSelectedOption] =
    useState<SelectedOption>("new-user");

  const { data, isLoading, error } = useQuery("users", loadUsers);

  const { modalIsOpen, handleCloseModal, handleOpenModal } = useModalContext();

  const columns: TableColumn<User>[] = [
    { title: "Nome", render: (data) => data.name },
    { title: "E-mail", render: (data) => data.email },
    { title: "CPF", render: (data) => data.cpf },
    { title: "Endereço", render: (data) => data.address },
    { title: "Telefone", render: (data) => data.phone },
  ];

  async function loadUsers() {
    const response = await fetch(
      "https://api-production-160a.up.railway.app/patienties"
    );

    return await response.json();
  }

  const handleDeleteUser = useCallback(
    (user: User) => {
      setSelectedUser(user);
      setSelectedOption("delete");

      handleOpenModal();
    },
    [setSelectedUser, setSelectedOption, handleOpenModal]
  );

  const handleClickEditUser = useCallback(
    (user: User) => {
      setSelectedUser(user);
      setSelectedOption("edit");

      handleOpenModal();
    },
    [setSelectedUser, setSelectedOption, handleOpenModal]
  );

  const handleCreateUser = useCallback(() => {
    setSelectedOption("new-user");

    handleOpenModal();
  }, [setSelectedOption, handleOpenModal]);

  function renderCreateUserModal() {
    return (
      <CreateUserModal
        modalIsOpen={modalIsOpen}
        handleClickCloseModal={handleCloseModal}
      />
    );
  }

  function renderDeleteModal() {
    return (
      <DeleteFormModal
        selectedUser={selectedUser}
        modalIsOpen={modalIsOpen}
        handleClickCloseModal={handleCloseModal}
      />
    );
  }

  function renderEditModal() {
    return (
      <EditFormModal
        selectedUser={selectedUser}
        modalIsOpen={modalIsOpen}
        handleClickCloseModal={handleCloseModal}
      />
    );
  }

  return (
    <>
      <Heading
        title="Usuários"
        description="Cadastre e gerencie seus usários"
        icon={UserIcon}
      />

      {error && <Text>Erro ao obter os usuários</Text>}

      {isLoading && <Spinner size={64} />}

      <RenderIf
        condition={data?.length > 0 && !isLoading}
        renderIf={
          <Table<User>
            title="Usuários"
            data={data}
            columns={columns}
            headerButton={{
              label: "Novo usuário",
              onClick: handleCreateUser,
            }}
            handleClickEdit={handleClickEditUser}
            handleClickDelete={handleDeleteUser}
          />
        }
      />

      <RenderIf
        condition={selectedOption === "new-user"}
        renderIf={renderCreateUserModal()}
      />

      <RenderIf
        condition={selectedOption === "edit"}
        renderIf={renderEditModal()}
      />

      <RenderIf
        condition={selectedOption === "delete"}
        renderIf={renderDeleteModal()}
      />
    </>
  );
}
