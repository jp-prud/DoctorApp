import { Heading } from "../../../components/atomic/Heading/Heading";

import HistoryIcon from "../../../assets/images/icons/order.svg";

export function HistoryScreen() {
  return (
    <Heading
      title="Histórico"
      description="Visualize os atendimentos anteriores"
      icon={HistoryIcon}
    />
  );
}
