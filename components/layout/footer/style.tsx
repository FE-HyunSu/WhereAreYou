import styled from 'styled-components';

export const FooterBox = styled.footer`
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  border-top: 0.1rem solid rgba(255, 255, 255, 0.1);
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.1);
  transition: 0.3s;
  z-index: 5;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0;
    padding: 0;
    font-weight: 300;
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.5);
    text-align: center;
    a {
      display: inline-block;
      width: 4rem;
      opacity: 0.3;
      transition: 0.3s;
      svg {
        width: 80%;
      }
      &:hover {
        opacity: 1;
      }
    }
  }
`;
