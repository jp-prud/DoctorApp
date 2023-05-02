import {NotificationGroup} from '@screens/App/NotificationsScreen/NotificationsScreen';

export const notificationsList: NotificationGroup[] = [
  {
    date: '1651395600000',
    notifications: [
      {
        title: 'Consulta agendada',
        description:
          'Sua consulta com o Dr. João foi confirmada para amanhã às 14h.',
      },
      {
        title: 'Resultado de exame',
        description:
          'O seu resultado de exame de sangue já está disponível para visualização..',
      },
    ],
  },
  {
    date: '1651309200000',
    notifications: [
      {
        title: 'Lembrete de exame',
        description:
          'Lembrete: Não esqueça de realizar o exame de sangue agendado para amanhã às 8h.',
      },
      {
        title: 'Nova mensagem do médico',
        description: 'Você tem uma nova mensagem do seu médico.',
      },
    ],
  },
  {
    date: '1651222800000',
    notifications: [
      {
        title: 'Cancelamento de consulta',
        description:
          'Seu médico está com atraso de 30 minutos para o atendimento agendado.',
      },
      {
        title: 'Lembrete de consulta',
        description:
          'Lembrete: sua consulta com o Dr. Fernandes está marcada para amanhã às 10h.',
      },
      {
        title: 'Prescrição médica',
        description:
          'Sua prescrição médica já está disponível para visualização no aplicativo. Acesse e confira.',
      },
    ],
  },
  {
    date: '1651136400000',
    notifications: [
      {
        title: 'Lembrete de consulta',
        description:
          'Sua consulta com a Dra. Silva está marcada para hoje às 15h.',
      },
      {
        title: 'Resultado de exame',
        description:
          'O resultado do seu exame de imagem já está disponível para visualização.',
      },
      {
        title: 'Lembrete de consulta',
        description:
          'Sua consulta com o Dr. Alves está marcada para amanhã às 11h.',
      },
    ],
  },
];
