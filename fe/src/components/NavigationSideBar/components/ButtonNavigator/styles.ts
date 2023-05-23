import styled from "styled-components";

import { NavLink, NavLinkProps } from "react-router-dom";

export const Container = styled(NavLink)<NavLinkProps>`
  width: 100%;
  height: 96px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  position: relative;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const ActiveScreenIcon = styled.div`
  height: 2px;
  width: 12px;
  border-radius: 1px;
  background: blue;
  position: absolute;
  bottom: 12px;
`;
