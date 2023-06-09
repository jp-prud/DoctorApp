import { styled } from "styled-components";

export const Container = styled.button`
  all: unset;
  width: 100%;
  height: 128px;
  background: #ffffff;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;

  & + & {
    margin-top: 16px;
  }
`;
