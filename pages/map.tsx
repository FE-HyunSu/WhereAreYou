import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import KakaoMap from '../components/kakaomap';
import { useRecoilState } from 'recoil';
import { locationAtom, headerTitle } from '../store/store';
import Loading from '../components/loading';
import ErrorBox from '../components/error';

const Map = () => {
  const [isHeaderTitleRecoil, setHeaderTitleRecoil] = useRecoilState(headerTitle);
  const [isPosition, setPosition] = useRecoilState(locationAtom);
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [isError, setError] = useState<Boolean>(false);
  const router = useRouter();
  const { lat, lng } = router.query;
  const reGeolocation = async () => {
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
    if (!router.isReady) return;
    if ((Number(lat) === 0 && Number(lng) === 0) || !navigator.geolocation) {
      reGeolocation();
      alert('브라우저의 위치서비스 권한을 허용해 주세요.');
      return;
    }
    setPosition({
      lat: Number(lat),
      lng: Number(lng),
    });
    setHeaderTitleRecoil('나는 지금 여기야');
    setLoading(false);
  }, [router.isReady]);
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

export default Map;
