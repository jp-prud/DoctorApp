import {FlatList, ListRenderItemInfo, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import ViewWrapper from '@components/atomic/ViewWrapper';
import {Text} from '@components/atomic/Text';
import {Heading} from '@components/atomic/Heading';

import {Details, OptionCardContainer, OptionsWrapper} from './styles';

import MailIcon from '@assets/icons/mail.svg';
import PhoneIcon from '@assets/icons/call-receive.svg';

interface OptionCard {
  title: string;
  subtitle: string;
  redirectPage: string;
}

const ForgotPasswordOptionsData: OptionCard[] = [
  {
    title: 'E-mail',
    subtitle: 'Envie para o seu e-mail',
    redirectPage: 'email-forgot-password',
  },
  {
    title: 'Telefone',
    subtitle: 'Envie para o seu número de telefone',
    redirectPage: 'phone-forgot-password',
  },
];

export function ForgotPasswordScreen() {
  const navigation = useNavigation();

  function renderOptionCard({
    item: {title, subtitle, redirectPage},
  }: ListRenderItemInfo<OptionCard>) {
    return (
      <OptionCardContainer onPress={() => navigation.navigate(redirectPage)}>
        {title === 'E-mail' ? <MailIcon /> : <PhoneIcon />}

        <Details>
          <Text weight="600">{title}</Text>
          <Text size="SM">{subtitle}</Text>
        </Details>
      </OptionCardContainer>
    );
  }

  function Separator() {
    return <View style={{height: 16}} />;
  }

  return (
    <ViewWrapper>
      <Heading
        title="Recupere a sua senha"
        subtitle="Não se preocupe! Selecione a opção desejada e defina uma nova senha para sua conta."
        hasBackButton
      />

      <OptionsWrapper>
        <FlatList
          data={ForgotPasswordOptionsData}
          keyExtractor={item => item.title}
          renderItem={renderOptionCard}
          ItemSeparatorComponent={Separator}
        />
      </OptionsWrapper>
    </ViewWrapper>
  );
}
