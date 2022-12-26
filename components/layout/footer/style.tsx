import styled from 'styled-components';

export const FooterBox = styled.footer`
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  transition: 0.3s;
  z-index: 11;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(2rem);
    z-index: -1;
  }
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0;
    padding: 0;
    font-weight: 300;
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.5);
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
