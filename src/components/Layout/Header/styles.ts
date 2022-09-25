import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: var(--main_blue);

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem 1rem 12rem;

    button {
      font-size: 1rem;

      color: #fff;
      background-color: var(--blue_light);

      border: 0;
      border-radius: 0.25rem;

      padding: 0 2rem;
      height: 3rem;

      transition: filter 0.5s ease;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
