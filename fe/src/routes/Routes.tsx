import { Routes as Switch, Route, Navigate, Outlet } from "react-router-dom";

import { HomeScreen } from "../screens/App/HomeScreen/HomeScreen";
import { UsersScreen } from "../screens/App/UsersScreen/UsersScreen";
import { HistoryScreen } from "../screens/App/HistoryScreen/HistoryScreen";
import { AppointmentScreen } from "../screens/App/AppointmentScreen/AppointmentScreen";
import { ProfileScreen } from "../screens/App/ProfileScreen/ProfileScreen";
import { LoginScreen } from "../screens/Auth/LoginScreen/LoginScreen";

function CustomRoute() {
  const isAthenticated = true;

  return isAthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export function Routes() {
  return (
    <Switch>
      <Route path="/">
        {/* PUBLIC ROUTES */}

        <Route path="/login" element={<LoginScreen />} />

        <Route element={<CustomRoute />}>
          {/* PRIVATE ROUTES */}

          <Route path="/home" index element={<HomeScreen />} />
          <Route path="/history" element={<HistoryScreen />} />
          <Route path="/appointments" element={<AppointmentScreen />} />
          <Route path="/users" element={<UsersScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Route>
      </Route>
    </Switch>
  );
}
