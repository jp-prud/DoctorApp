import styled from "styled-components";

export const TableWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .details {
    display: flex;
    gap: 8px;
    align-items: baseline;

    span {
      width: 26px;
      height: 27px;
      text-align: center;
      line-height: 27px;
      background: rgba(204, 204, 204, 0.2);
      border-radius: 4px;
    }
  }
`;

export const Table = styled.table`
  border: 1px solid rgba(204, 204, 204, 0.4);
  text-align: left;
  width: 100%;
  border-radius: 16px;
  border-spacing: 0;
  overflow: hidden;

  thead {
    border-collapse: collapse;
    background: rgba(204, 204, 204, 0.2);

    th {
      border-bottom: 1px solid rgba(250, 250, 250, 1);

      padding-block: 16px;

      &:first-child {
        padding-left: 16px;
      }

      &:last-child {
        padding-right: 16px;
      }
    }
  }

  tbody {
    background: #fff;

    td {
      padding-block: 22px;

      &:first-child {
        padding-left: 16px;
      }

      &:last-child {
        padding-right: 16px;
      }
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;

  button {
    border: none;
    background: none;
  }
`;
