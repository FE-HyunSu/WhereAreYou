import React from 'react';
// import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { MapUI } from './style';
import { useRecoilValue } from 'recoil';
import { locationAtom } from '../../store/store';

const KakaoMap = () => {
  const recoilLocation = useRecoilValue(locationAtom);
  return (
    <>
      <MapUI>
        {/* <Map
          center={{ lat: Number(recoilLocation.lat), lng: Number(recoilLocation.lng) }}
          style={{ width: '100%', height: '100vh' }}
        >
          <MapMarker
            position={{ lat: Number(recoilLocation.lat), lng: Number(recoilLocation.lng) }}
          >
            <div
              style={{
                fontSize: `3rem`,
              }}
            >
              👋👋👋👋👋
            </div>
          </MapMarker>
        </Map> */}
      </MapUI>
    </>
  );
};
export default KakaoMap;
