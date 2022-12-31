import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { MapUI, MarckerItem, BtnShare } from './style';
import { useRecoilValue } from 'recoil';
import { locationAtom } from '../../store/store';
import Router from 'next/router';

const LocationView = () => {
  const recoilLocation = useRecoilValue(locationAtom);
  return (
    <>
      <MapUI>
        <Map
          center={{ lat: Number(recoilLocation.lat), lng: Number(recoilLocation.lng) }}
          style={{ width: '100%', height: '100vh' }}
        >
          <MapMarker
            position={{ lat: Number(recoilLocation.lat), lng: Number(recoilLocation.lng) }}
          ></MapMarker>
        </Map>
        <BtnShare onClick={() => Router.push('/')}>내 위치도 공유하러 가기</BtnShare>
      </MapUI>
    </>
  );
};
export default LocationView;
