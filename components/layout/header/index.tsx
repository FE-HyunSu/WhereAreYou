import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { headerTitle } from '../../../store/store';

const Header = () => {
  const Title = useRecoilValue(headerTitle);
  return (
    <HeaderBox>
      <h1>{Title}</h1>
    </HeaderBox>
  );
};
export default Header;

const HeaderBox = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
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
  h1 {
    font-weight: 200;
    font-size: 1.4rem;
    color: rgba(0, 0, 0, 0.8);
    text-align: center;
    text-transform: uppercase;
  }
`;
