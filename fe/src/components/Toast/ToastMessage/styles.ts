import styled, { css } from "styled-components";

const containerVariants = {
  default: css`
    background: ${({ theme }) => theme.COLORS.BLUE};
  `,
  success: css`
    background: ${({ theme }) => theme.COLORS.GREEN_500};
  `,
  danger: css`
    background: ${({ theme }) => theme.COLORS.RED};
  `,
};

interface ContainerProps {
  type: "default" | "success" | "danger";
}

export const Container = styled.div<ContainerProps>`
  padding: 16px 32px;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  ${({ type }) => containerVariants[type]};

  img {
    margin-right: 8px;
  }

  & + & {
    margin-top: 16px;
  }

  &:hover {
    cursor: pointer;
  }
`;
