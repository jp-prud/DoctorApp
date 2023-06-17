import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;

  .details,
  .content {
    flex: 1;
    width: 100%;
    min-width: 416px;
  }

  .details {
  }

  .content {
  }
`;
