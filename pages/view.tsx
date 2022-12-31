import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import LocationView from '../components/kakaomap/view';
import { useRecoilState } from 'recoil';
import { locationAtom, headerTitle } from '../store/store';

const Index = () => {
  const [isHeaderTitleRecoil, setHeaderTitleRecoil] = useRecoilState(headerTitle);
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
      <LocationView />
    </>
  );
};

export default Index;
