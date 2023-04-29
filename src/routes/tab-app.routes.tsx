import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {useAuthContext} from '@context/AuthContext';

import {HomeScreen} from '@screens/App/HomeScreen/HomeScreen';
import {AppointmentScreen} from '@screens/App/AppointmentScreen/AppointmentScreen';
import {ProfileScreen} from '@screens/App/ProfileScreen/ProfileScreen';
import {AccountScreen} from '@screens/Auth/AccountScreen/AccountScreen';
import {RegisterScreen} from '@screens/Auth/RegisterScreen/RegisterScreen';
import {LoadingScreen} from '@screens/App/LoadingScreen/LoadingScreen';
import {NotificationsScreen} from '@screens/App/NotificationsScreen/NotificationsScreen';

import {ScreenTabBarButton} from '@components/ScreenTabBarButton';
import {RenderIfElse} from '@components/atomic/RenderIfElse';

import HomeIcon from '@assets/icons/home.svg';
import AppointmentIcon from '@assets/icons/order.svg';
import CalendarIcon from '@assets/icons/calendar.svg';
import ProfileIcon from '@assets/icons/profile.svg';

const {Navigator, Screen} = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="HomeView" component={HomeScreen} />
      <Screen name="NotificationsView" component={NotificationsScreen} />
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

function HistoryStackScreen() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="HistoryView" component={AppointmentScreen} />
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

export function AuthStackScreen() {
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

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="NotificationsView"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 76,
          alignItems: 'center',
          borderTopLeftRadius: 36,
          borderTopRightRadius: 36,
          justifyContent: 'space-evenly',
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <ScreenTabBarButton
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
            <ScreenTabBarButton
              title="Consultas"
              renderIcon={<AppointmentIcon />}
              isActive={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <ScreenTabBarButton
              title="Histórico"
              renderIcon={<CalendarIcon />}
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
            <ScreenTabBarButton
              title="Perfil"
              renderIcon={<ProfileIcon />}
              isActive={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export function TabNavigatorRoutes() {
  const {isAuthenticated} = useAuthContext();

  return (
    <NavigationContainer>
      <RenderIfElse
        condition={false}
        renderIf={
          <LoadingScreen subtitle="Estamos preparando coisas incríveis!" />
        }
        renderElse={
          <RenderIfElse
            condition={isAuthenticated}
            renderIf={TabNavigator()}
            renderElse={AuthStackScreen()}
          />
        }
      />
    </NavigationContainer>
  );
}
