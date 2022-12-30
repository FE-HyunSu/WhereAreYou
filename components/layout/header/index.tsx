import { HeaderBox } from './style';
import { useRecoilValue } from 'recoil';
import { headerTitle } from '../../../store/store';

const Header = () => {
  const Title = useRecoilValue(headerTitle);
  return (
    <>
      <HeaderBox>
        <h1>{Title}</h1>
      </HeaderBox>
    </>
  );
};
export default Header;
