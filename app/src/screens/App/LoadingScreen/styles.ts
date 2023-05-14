import styled from "styled-components/native";

import ViewWrapper from "@components/atomic/ViewWrapper";

export const Container = styled(ViewWrapper)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
`
