import styled from "styled-components";

export const ToastContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  position: fixed;
  bottom: 48px;
  z-index: 9999;
  left: 50%;
  transform: translateX(-50%);
`;
