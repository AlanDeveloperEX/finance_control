import styled from "styled-components";

export const SummaryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;

  div {
    background-color: var(--shape);
    padding: 1.5rem 3rem;

    border-radius: 0.25rem;

    color: var(--text_title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;

      margin-top: 1rem;

      font-size: 2rem;
      font-weight: 500;
    }

    &:last-child {
      background-color: var(--main_green);
      color: #fff;
    }
  }
`;
