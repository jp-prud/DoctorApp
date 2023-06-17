import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 24px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid rgba(204, 204, 204, 0.4);

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    .quantity-board {
      text-align: center;
      width: 22px;
      height: 27px;
      line-height: 27px;
      background: rgba(204, 204, 204, 0.2);
      border-radius: 4px;
    }
  }
`;
