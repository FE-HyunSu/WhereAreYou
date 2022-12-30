import React, { useState, useEffect } from 'react';
import Loading from '../components/loading';
import ErrorBox from '../components/error';
import { useRecoilState } from 'recoil';
import { locationAtom, headerTitle } from '../store/store';
import IntroView from '../components/intro';

const Index = () => {
  const [isHeaderTitleRecoil, setHeaderTitleRecoil] = useRecoilState(headerTitle);
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
    setHeaderTitleRecoil('거기 지금 어디야');
  }, []);
  return (
    <>
      {isLoading && isLoading ? (
        <Loading />
      ) : isError && isError ? (
        <ErrorBox />
      ) : (
        <>
          <IntroView />
        </>
      )}
    </>
  );
};

export default Index;
