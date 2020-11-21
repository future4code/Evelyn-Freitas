import styled from 'styled-components'

export const ButtonsContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-auto-flow: column;
  gap: 16px;
`;

export const FormContainer = styled.div `
    display: flex;
    flex-direction: column;
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
`;

export const Catchphrase = styled.h2 `
    display: flex;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 50px;
`;