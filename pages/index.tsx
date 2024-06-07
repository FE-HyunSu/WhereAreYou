import React, { useState, useEffect } from 'react';
import ErrorBox from '../components/error';
import { useRecoilState } from 'recoil';
import { locationAtom, headerTitle } from '../store/store';
import IntroView from '../components/intro';
import FullpageLoading from '../components/common/FullPageLoading';

const Index = () => {
  const [isHeaderTitleRecoil, setHeaderTitleRecoil] = useRecoilState(headerTitle);
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [isError, setError] = useState<Boolean>(false);
  const [isPosition, setPosition] = useRecoilState(locationAtom);
  const locationSet = async () => {
    if (navigator.geolocation) {
      try {
        await navigator.geolocation.getCurrentPosition((position) => {
          setPosition({
            lat: Number(position.coords.latitude),
            lng: Number(position.coords.longitude),
          });
        });
        setTimeout(() => {
          setLoading(false);
        }, 0);
      } catch {
        setLoading(false);
        setError(true);
      }
    } else {
      alert('브라우저의 위치서비스 권한을 허용해 주세요.');
    }
  };
  useEffect(() => {
    locationSet();
    setHeaderTitleRecoil('거기 지금 어디야');
  }, []);
  return <>{isLoading ? <FullpageLoading /> : isError && isError ? <ErrorBox /> : <IntroView />}</>;
};

export default Index;
