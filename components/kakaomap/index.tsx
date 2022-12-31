import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { MapUI, MarckerItem, BtnShare } from './style';
import { useRecoilValue } from 'recoil';
import { locationAtom } from '../../store/store';

const KakaoMap = () => {
  const recoilLocation = useRecoilValue(locationAtom);
  const kakaoShare = () => {
    alert('카톡 공유하기 연동 필요.');
  };
  return (
    <>
      <MapUI>
        <Map
          center={{ lat: Number(recoilLocation.lat), lng: Number(recoilLocation.lng) }}
          style={{ width: '100%', height: '100vh' }}
        >
          <MarckerItem>나는 지금 여기야</MarckerItem>
        </Map>
        <BtnShare onClick={() => kakaoShare()}>카카오톡으로 공유하기</BtnShare>
      </MapUI>
    </>
  );
};
export default KakaoMap;
