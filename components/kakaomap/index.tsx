import React, { useRef, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { MapUI } from './style';

const KakaoMap = () => {
  const mapBox = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <MapUI>
        <Map center={{ lat: 33.5563, lng: 126.79581 }} style={{ width: '100%', height: '360px' }}>
          <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
            <div style={{ color: '#000' }}>Hello</div>
          </MapMarker>
        </Map>
      </MapUI>
    </>
  );
};
export default KakaoMap;
