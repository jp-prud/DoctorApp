import { Heading } from "../../../components/atomic/Heading/Heading";

import ProfileIcon from '../../../assets/images/icons/profile.svg';

export function ProfileScreen() {
  return (
    <Heading
      title="Meu Perfil"
      description="Gerencie facilmente suas informações"
      icon={ProfileIcon}
    />
  );
}
