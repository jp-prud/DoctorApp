import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {ScreenTabBarButton} from '@components/ScreenTabBarButton';

import HomeIcon from '@assets/icons/home.svg';
import AppointmentIcon from '@assets/icons/order.svg';
import CalendarIcon from '@assets/icons/calendar.svg';
import ProfileIcon from '@assets/icons/profile.svg';
import {
  HomeStackScreen,
  AppointmentStackScreen,
  HistoryStackScreen,
  ProfileStackScreen,
} from './stack-navigation.routes';

const TAB_NAVIGATOR_SCREEN_OPTIONS = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    height: 76,
    alignItems: 'center',
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    justifyContent: 'space-evenly',
  },
} as BottomTabNavigationOptions;

const Tab = createBottomTabNavigator();

export function TabNavigatorScreen() {
  return (
    <Tab.Navigator
      initialRouteName="NotificationsView"
      screenOptions={() => TAB_NAVIGATOR_SCREEN_OPTIONS}>
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
