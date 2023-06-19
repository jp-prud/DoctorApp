import { useForm } from "react-hook-form";
import { Modal } from "../../../../../components/Modal/Modal";
import { ControlledTextInput } from "../../../../../components/Controller/ControlledTextInput";

import {
  createUserModalSchema,
  createUserModalSchemaTypes,
} from "./createUserModalSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useState } from "react";
import toast from "../../../../../utils/toast";

interface CreateFormModalProps {
  modalIsOpen: boolean;
  handleClickCloseModal(): void;
}

export function CreateUserModal({
  modalIsOpen,
  handleClickCloseModal,
}: CreateFormModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  const { control, handleSubmit, resetField } =
    useForm<createUserModalSchemaTypes>({
      resolver: zodResolver(createUserModalSchema),
      mode: "onChange",
      defaultValues: {
        name: "",
        email: "",
        cpf: "",
        address: "",
        phone: "",
      },
    });

  async function handleClickCreateUserSubmit(data: createUserModalSchemaTypes) {
    try {
      setIsLoading(true);

      await fetch("https://api-production-160a.up.railway.app/patienties", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      handleClickCloseModal();
    } catch (error) {
      console.log("Erro ao criar um novo usuário", error);

      toast({
        message: {
          type: "danger",
          text: "Erro ao criar um novo usuário, tente novamente!",
        },
      });
    } finally {
      setIsLoading(false);
    }
  }

  const handleClickResetField = useCallback(
    (currentFieldName: keyof createUserModalSchemaTypes) => {
      return resetField(currentFieldName);
    },
    [resetField]
  );

  return (
    <Modal
      title="Criar Usuário"
      visible={modalIsOpen}
      onConfirm={handleSubmit(handleClickCreateUserSubmit)}
      onCancel={() => handleClickCloseModal()}
      isLoading={isLoading}
    >
      <ControlledTextInput
        control={control}
        name="name"
        label="Nome"
        handleResetField={() => handleClickResetField("name")}
      />

      <ControlledTextInput
        control={control}
        name="email"
        label="E-mail"
        handleResetField={() => handleClickResetField("email")}
      />

      <ControlledTextInput
        control={control}
        name="cpf"
        label="CPF"
        handleResetField={() => handleClickResetField("cpf")}
      />

      <ControlledTextInput
        control={control}
        name="address"
        label="Endereço"
        handleResetField={() => handleClickResetField("address")}
      />

      <ControlledTextInput
        control={control}
        name="phone"
        label="Telefone"
        handleResetField={() => handleClickResetField("phone")}
      />
    </Modal>
  );
}
