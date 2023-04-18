import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from '@screens/Home';
import AppointmentScreen from '@screens/Appointment';
import ProfileScreen from '@screens/Profile';
import AccountScreen from '@screens/Auth/Account';
import RegisterScreen from '@screens/Auth/Register';

import HomeIcon from '@assets/icons/home.svg';
import AppointmentIcon from '@assets/icons/order.svg';
import ProfileIcon from '@assets/icons/profile.svg';
import {ScreenButton} from '@components/ScreenButton';

const {Navigator, Screen} = createNativeStackNavigator();

function AuthStackScreen() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="account" component={AccountScreen} />
      <Screen name="register" component={RegisterScreen} />
    </Navigator>
  );
}

function HomeStackScreen() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="HomeView" component={HomeScreen} />
    </Navigator>
  );
}

function AppointmentStackScreen() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="AppointmentView" component={AppointmentScreen} />
    </Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="ProfileStackScreen" component={ProfileScreen} />
    </Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function TabAppRoutes() {
  return (
    <NavigationContainer>
      {false ? (
        AuthStackScreen()
      ) : (
        <>
          <Tab.Navigator
            screenOptions={({route}) => ({
              headerShown: false,
              tabBarShowLabel: false,
              tabBarStyle: {
                height: 72,
                alignItems: 'center',
              },
            })}>
            <Tab.Screen
              name="Home"
              component={HomeStackScreen}
              options={{
                tabBarIcon: ({focused}) => (
                  <ScreenButton
                    title="Home"
                    renderIcon={<HomeIcon />}
                    isActive={focused}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Appointment"
              component={AppointmentStackScreen}
              options={{
                tabBarIcon: ({focused}) => (
                  <ScreenButton
                    title="Atendimentos"
                    renderIcon={<AppointmentIcon />}
                    isActive={focused}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Profile"
              component={ProfileStackScreen}
              options={{
                tabBarIcon: ({focused}) => (
                  <ScreenButton
                    title="Meu Perfil"
                    renderIcon={<ProfileIcon />}
                    isActive={focused}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </>
      )}
    </NavigationContainer>
  );
}
