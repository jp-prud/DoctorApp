import { Routes } from "../../routes/Routes";
import { NavigationSideBar } from "../NavigationSideBar/NavigationSideBar";
import MainWrapperContent from "../atomic/MainWrapperContent";
import ScreenWrapper from "../atomic/ScreenWrapper";

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
          </MainWrapperContent>
        </>
      )}
    </ScreenWrapper>
  );
}
