import styled from "styled-components";

export const TransactionsTableContainer = styled.div`
  margin-top: 2rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text_body);

      font-weight: 400;

      padding: 1rem 2rem;

      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;

      border: 0;
      border-radius: 0.25rem;

      color: var(--text_title);
      background-color: var(--shape);

      &.deposit {
        color: var(--main_green);
      }

      &.withdraw {
        color: var(--main_red);
      }
    }
  }
`;
