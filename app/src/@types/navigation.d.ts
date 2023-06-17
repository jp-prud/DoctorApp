export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      account: string;
      register: string;
      forgotPassword: string;
      orders: string;
      profile: string;
      History: string;
      appointment: string;
      appointmentsList: string;
    }
  }
}

export type RoutesPathOptions =
  | 'account'
  | 'register'
  | 'forgotPassword'
  | 'orders'
  | 'profile'
  | 'History'
  | 'appointment'
  | 'NotificationsView';
