import styled from "styled-components";

interface ContainerProps {
  danger?: boolean;
}

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  inset: 0;
`;

export const Container = styled.div<ContainerProps>`
  width: 95%;
  max-width: 450px;
  background: #fff;
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

  .modal-body {
    margin-top: 32px;
  }
`;

export const Header = styled.header<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h1 {
    color: ${({ theme, danger }) => danger && theme.COLORS.RED};
    font-size: 22px;
  }

  button {
    border: none;
    background: none;
  }
`;

export const Footer = styled.footer<ContainerProps>`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .cancel-button {
    color: ${({ theme, danger }) =>
      danger ? theme.COLORS.RED : theme.COLORS.GRAY_400};
    padding-inline: 0;
    font-weight: 500;

    &[disabled] {
      cursor: not-allowed;
    }
  }
`;
