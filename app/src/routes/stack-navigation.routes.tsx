import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import {HomeScreen} from '@screens/App/HomeScreen/HomeScreen';
import {AppointmentScreen} from '@screens/App/AppointmentScreen/AppointmentScreen';
import {ProfileScreen} from '@screens/App/ProfileScreen/ProfileScreen';
import {AccountScreen} from '@screens/Auth/AccountScreen/AccountScreen';
import {RegisterScreen} from '@screens/Auth/RegisterScreen/RegisterScreen';
import {NotificationsScreen} from '@screens/App/NotificationsScreen/NotificationsScreen';

import {HistoryScreen} from '@screens/App/HistoryScreen/HistoryScreen';
import {OnboardingScreen} from '@screens/Auth/OnboardingScreen/OnboardingScreen';
import {ForgotPasswordScreen} from '@screens/Auth/ForgotPasswordScreen/ForgotPasswordScreen';
import {TermsAndConditionsScreen} from '@screens/Auth/TermsAndConditionsScreen/TermsAndConditionsScreen';
import {ForgotPasswordEmailScreen} from '@screens/Auth/ForgotPasswordEmailScreen/ForgotPasswordEmailScreen';
import {ForgotPasswordPhoneScreen} from '@screens/Auth/ForgotPasswordPhoneScreen/ForgotPasswordPhoneScreen';
import {AuthCodeValidatorScreen} from '@screens/Auth/AuthCodeValidatorScreen/AuthCodeValidatorScreen';
import {NewPasswordScreen} from '@screens/Auth/NewPasswordScreen/NewPasswordScreen';

const NAVIGATOR_STACK_SCREEN_OPTIONS = {
  headerShown: false,
  animation: 'slide_from_right',
} as NativeStackNavigationOptions;

const {Navigator, Screen} = createNativeStackNavigator();

export function HomeStackScreen() {
  return (
    <Navigator screenOptions={NAVIGATOR_STACK_SCREEN_OPTIONS}>
      <Screen name="HomeView" component={HomeScreen} />
      <Screen name="NotificationsView" component={NotificationsScreen} />
    </Navigator>
  );
}

export function AppointmentStackScreen() {
  return (
    <Navigator screenOptions={NAVIGATOR_STACK_SCREEN_OPTIONS}>
      <Screen name="AppointmentView" component={AppointmentScreen} />
    </Navigator>
  );
}

export function HistoryStackScreen() {
  return (
    <Navigator screenOptions={NAVIGATOR_STACK_SCREEN_OPTIONS}>
      <Screen name="HistoryView" component={HistoryScreen} />
    </Navigator>
  );
}

export function ProfileStackScreen() {
  return (
    <Navigator screenOptions={NAVIGATOR_STACK_SCREEN_OPTIONS}>
      <Screen name="ProfileStackScreen" component={ProfileScreen} />
    </Navigator>
  );
}

export function AuthStackScreen() {
  return (
    <Navigator
      initialRouteName="onboarding"
      screenOptions={NAVIGATOR_STACK_SCREEN_OPTIONS}>
      <Screen name="onboarding" component={OnboardingScreen} />
      <Screen name="account" component={AccountScreen} />
      <Screen name="register" component={RegisterScreen} />
      <Screen name="forgot-password" component={ForgotPasswordScreen} />
      <Screen
        name="email-forgot-password"
        component={ForgotPasswordEmailScreen}
      />
      <Screen
        name="phone-forgot-password"
        component={ForgotPasswordPhoneScreen}
      />
      <Screen name="auth-code-validation" component={AuthCodeValidatorScreen} />
      <Screen name="new-password" component={NewPasswordScreen} />
      <Screen
        name="terms-and-conditions"
        component={TermsAndConditionsScreen}
      />
    </Navigator>
  );
}
