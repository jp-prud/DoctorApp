import { Routes } from "../../routes/Routes";
import { NavigationSideBar } from "../NavigationSideBar/NavigationSideBar";
import MainWrapperContent from "../atomic/MainWrapperContent";
import ScreenWrapper from "../atomic/ScreenWrapper";
import { ToastContainer } from "../Toast/ToastContainer/ToastContainer";

export function Layout() {
  const isAuthenticated = true;

  return (
    <ScreenWrapper>
      {!isAuthenticated && <Routes />}

      {isAuthenticated && (
        <>
          <NavigationSideBar />

          <MainWrapperContent>
            <Routes />

            <ToastContainer />
          </MainWrapperContent>
        </>
      )}
    </ScreenWrapper>
  );
}
