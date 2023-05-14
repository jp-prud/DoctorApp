import {FlatList, View, ListRenderItemInfo} from 'react-native';

import {useTheme} from 'styled-components/native';

import ViewWrapper from '@components/atomic/ViewWrapper';
import {Heading} from '@components/atomic/Heading';
import {Text} from '@components/atomic/Text';

import {ContentWrapper} from './styles';

import TermsAndConditions from 'src/mocks/TermsAndConditions';

export function TermsAndConditionsScreen() {
  const theme = useTheme();

  function renderImportantTopics({item, index}: ListRenderItemInfo<string>) {
    return (
      <Text style={{marginLeft: theme.SIZE.MD}}>
        <Text color="BLUE" weight="600">
          {`${index + 1} - `}
        </Text>
        {item}
      </Text>
    );
  }

  function renderFooterList() {
    return (
      <Text>
        Ao usar este aplicativo, você concorda com estes termos e condições e
        reconhece que é responsável pelo uso adequado e seguro do aplicativo. Se
        você não concordar com estes termos e condições, por favor, não use este
        aplicativo.
      </Text>
    );
  }

  function renderHeaderList() {
    return (
      <Text>
        Bem-vindo ao nosso aplicativo de agendamento de consultas médicas. Ao
        usar este aplicativo, você concorda com os seguintes termos e condições:
      </Text>
    );
  }

  function Separator() {
    return <View style={{height: theme.SIZE.MD}} />;
  }

  return (
    <ViewWrapper>
      <Heading title="Termos e Condições" hasBackButton />

      <ContentWrapper>
        <FlatList
          data={TermsAndConditions}
          keyExtractor={item => item}
          renderItem={renderImportantTopics}
          ListHeaderComponent={renderHeaderList}
          ListFooterComponent={renderFooterList}
          ItemSeparatorComponent={Separator}
          ListHeaderComponentStyle={{marginBottom: theme.SIZE.MD}}
          ListFooterComponentStyle={{
            marginTop: theme.SIZE.MD,
            marginBottom: theme.SIZE['8X'],
          }}
        />
      </ContentWrapper>
    </ViewWrapper>
  );
}
