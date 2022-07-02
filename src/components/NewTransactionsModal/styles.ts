import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0rem 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px #d7d7d7;
    outline: 1px #d7d7d7;
    background: #e7e9ee;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    width: 100%;
    height: 4rem;
    margin-top: 1.5rem;
    border-radius: 0.25rem;
    border: 0;
    background: var(--green);
    color: var(--shape);
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  button {
    height: 4rem;
    padding: 1.5rem;
    background: transparent;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    font-size: 1rem;
    line-height: 1.5rem;

    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    transition: border-color 0.2s;

    &:hover {
      border-color: ${darken(0.1, '#d7d7d7')};
    }

    img {
      height: 30px;
      width: 30px;
    }
  }
`