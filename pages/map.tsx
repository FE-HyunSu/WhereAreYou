import React, { useState, useEffect } from 'react';
import KakaoMap from '../components/kakaomap';
import Loading from '../components/loading';
import ErrorBox from '../components/error';
import { useRecoilState } from 'recoil';
import { locationAtom } from '../store/store';

const Index = () => {
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [isError, setError] = useState<Boolean>(false);
  const [isPosition, setPosition] = useRecoilState(locationAtom);
  const locationSet = async () => {
    try {
      await navigator.geolocation.getCurrentPosition((position) => {
        setPosition({
          lat: Number(position.coords.latitude),
          lng: Number(position.coords.longitude),
        });
      });
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    } catch {
      setLoading(false);
      setError(true);
    }
  };
  useEffect(() => {
    locationSet();
  }, []);
  return (
    <>
      {isLoading && isLoading ? (
        <Loading />
      ) : isError && isError ? (
        <ErrorBox />
      ) : (
        <>
          <KakaoMap />
        </>
      )}
    </>
  );
};

export default Index;