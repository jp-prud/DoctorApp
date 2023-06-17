import * as z from "zod";

export const createUserModalSchema = z.object({
  name: z
    .string({
      required_error: "O campo de 'nome' é obrigatório",
    })
    .min(5, "Seu nome precisa ter no mínimo 5 caracteres")
    .max(12, "Seu nome precisa ter no mínimo 12 caracteres")
    .transform((name) =>
      name
        .split(" ")
        .map((name) => name.trim().charAt(0).toUpperCase() + name.slice(1))
        .join(" ")
    ),
  email: z
    .string({
      required_error: "O campo de 'e-mail' é obrigatório",
    })
    .email({
      message: "O campo de 'e-mail' é obrigatório",
    }),
  cpf: z.string({
    required_error: "O campo de 'cpf' é obrigatório",
  }),
  address: z.string({
    required_error: "O campo de 'endereço' é obrigatório",
  }),
  phone: z.string({
    required_error: "O campo de 'telefone' é obrigatório",
  }),
});

export type createUserModalSchemaTypes = z.infer<typeof createUserModalSchema>;
