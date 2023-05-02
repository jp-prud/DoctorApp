import {useNavigation} from '@react-navigation/native';
import {RoutesPathOptions} from 'src/@types/navigation';

import {TextWrapper, Description, CTA} from './styles';

interface AuthRedirectTextPageProps {
  description: string;
  toScreen: {
    text: string;
    path: RoutesPathOptions;
    params?: any;
  };
}

export function AuthRedirectTextPage({
  description,
  toScreen: {text, path, params},
}: AuthRedirectTextPageProps) {
  const navigation = useNavigation();

  function handleClickRedirect() {
    navigation.navigate(path, params);
  }

  return (
    <TextWrapper>
      <Description>{description}</Description>

      <CTA
        onPress={handleClickRedirect}
        title={text}
        size="SM"
        variant="link"></CTA>
    </TextWrapper>
  );
}
