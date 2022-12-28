import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import KakaoMap from '../components/kakaomap';
import Loading from '../components/loading';
import ErrorBox from '../components/error';
import { useRecoilState } from 'recoil';
import { locationAtom, headerTitle } from '../store/store';

const Index = () => {
  const [isHeaderTitleRecoil, setHeaderTitleRecoil] = useRecoilState(headerTitle);
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [isError, setError] = useState<Boolean>(false);
  const [isPosition, setPosition] = useRecoilState(locationAtom);
  const router = useRouter();
  const { lat, lng } = router.query;

  useEffect(() => {
    if (!router.isReady) return;
    setPosition({
      lat: Number(lat),
      lng: Number(lng),
    });
    setHeaderTitleRecoil('나는 지금 여기야');
  }, [router.isReady]);
  return (
    <>
      <KakaoMap />
      {/* {isLoading && isLoading ? (
        <Loading />
      ) : isError && isError ? (
        <ErrorBox />
      ) : (
        <>
          <KakaoMap />
        </>
      )} */}
    </>
  );
};

export default Index;
