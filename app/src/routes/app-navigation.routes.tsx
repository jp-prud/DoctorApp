import {NavigationContainer} from '@react-navigation/native';
// import {useAuthContext} from '@context/AuthContext';
import {LoadingScreen} from '@screens/App/LoadingScreen/LoadingScreen';
import {RenderIfElse} from '@components/atomic/RenderIfElse';
import {TabNavigatorScreen} from './tab-navigation.routes';
import {AuthStackScreen} from './stack-navigation.routes';

export function AppNavigationRoutes() {
  // const {isAuthenticated} = useAuthContext();

  return (
    <NavigationContainer>
      <RenderIfElse
        condition={false}
        renderIf={
          <LoadingScreen subtitle="Estamos preparando coisas incríveis!" />
        }
        renderElse={
          <RenderIfElse
            condition={true}
            renderIf={TabNavigatorScreen()}
            renderElse={AuthStackScreen()}
          />
        }
      />
    </NavigationContainer>
  );
}
