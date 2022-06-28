import styled from "styled-components";

export const Container = styled.div`
 margin-top: 4rem;
 
 table {
   width: 100%;
   border-spacing: 0 0.5rem; //Horizontal and Vertical
 }

 th {
  padding: 1rem 2rem;
  color: var(--text-body);
  font-weight: 400;
  text-align: left;
  line-height: 1.5rem;
 }

 td {
  padding: 1rem 2rem;
  background-color: var(--shape);
  border: 0;
  color: var(--text-body);

  
  &:first-child {
   color: var(--text-title);
  }
}
& .deposit{
  color: var(--green);
}

& .withdraw {
  color: var(--red);
 }

`