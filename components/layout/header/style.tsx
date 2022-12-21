import styled from 'styled-components';

export const HeaderBox = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  border-top: 0.1rem solid rgba(255, 255, 255, 0.4);
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.4);
  z-index: 11;
  h1 {
    font-weight: 200;
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    text-transform: uppercase;
  }
`;
