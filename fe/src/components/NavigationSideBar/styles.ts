import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 108px;
  max-width: 108px;
  height: 100vh;
  padding-top: 40px;
  background-color: white;
  position: sticky;
  box-shadow: 10px 0px 32px rgba(204, 204, 204, 0.1);

  .logo-wrapper {
    display: flex;
    width: 41px;
    margin-inline: auto;
    justify-content: center;
  }

  .screens-wrapper {
    margin-block: auto;
  }
`;
