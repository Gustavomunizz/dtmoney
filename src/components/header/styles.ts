import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--blue-header);
`
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 0rem 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border: 0;
    padding: 0rem 2rem;
    height: 3rem;
    font-size: 1rem;
    border-radius: 5px;

    background-color: var(--blue-light);
    color: #FFFFFF;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9);
    }
  }
`