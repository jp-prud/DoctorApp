import {OnboardingItemProps} from '@screens/Auth/Onboarding/components/OnboardingItem';

export const OnborardingScreenContent: OnboardingItemProps[] = [
  {
    index: 0,
    title: 'Agendamento Médico Fácil',
    description:
      'Agende consultas com profissionais de saúde credenciados de forma rápida e conveniente, diretamente pela palma de suas mãos.',
    image: require('@assets/images/WelcomeIlustration.png'),
  },
  {
    index: 1,
    title: 'Busca Personalizada de Profissionais',
    description:
      'Encontre profissionais critérios como especialidades, localização e avaliações de outros pacientes.',
    image: require('@assets/images/WelcomeIlustration.png'),
  },
  {
    index: 2,
    title: 'Recursos Adicionais para uma Experiência Satisfatória',
    description:
      'Aproveite lembretes de consulta, teleconsulta e opções de pagamento simplificadas.',
    image: require('@assets/images/WelcomeIlustration.png'),
  },
];
