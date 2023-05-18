import { ButtonNavigator } from "./components/ButtonNavigator/ButtonNavigator";
import { Container } from "./styles";

import Logo from "../../assets/images/SVG/logo.svg";

import HomeIcon from "../../assets/images/icons/home.svg";
import MenuIcon from "../../assets/images/icons/menu.svg";
import OrdersIcon from "../../assets/images/icons/order.svg";
import UsersIcon from "../../assets/images/icons/users.svg";
import ProfileIcon from "../../assets/images/icons/profile.svg";
import LogOffIcon from "../../assets/images/icons/log-off.svg";

export function NavigationSideBar() {
  const screens = [
    {
      title: "Home",
      path: "/home",
      icon: HomeIcon,
    },
    {
      title: "Histórico",
      path: "/history",
      icon: OrdersIcon,
    },
    {
      title: "Atendimentos",
      path: "/appointments",
      icon: MenuIcon,
    },
    {
      title: "Usuários",
      path: "/users",
      icon: UsersIcon,
    },
  ];

  const profileScreens = [
    {
      title: "Meu Perfil",
      path: "/profile",
      icon: ProfileIcon,
    },
    {
      title: "Sair",
      path: "/",
      icon: LogOffIcon,
    },
  ];

  return (
    <Container>
      <figure className="logo-wrapper">
        <img src={Logo} alt="Doctor App" title="Doctor App" />
      </figure>

      <ul className="screens-wrapper">
        {screens.map((item) => (
          <li key={item.title}>
            <ButtonNavigator {...item} />
          </li>
        ))}
      </ul>

      <ul className="profile-screens-wrapper">
        {profileScreens.map((item) => (
          <li key={item.title}>
            <ButtonNavigator {...item} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
