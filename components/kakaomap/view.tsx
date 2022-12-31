import React, { useState, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { MapUI, MarckerItem, BtnShare } from './style';
import { useRouter } from 'next/router';
import Router from 'next/router';
import Loading from '../../components/loading';

const LocationView = () => {
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [isLat, setLat] = useState<Number>(0);
  const [isLng, setLng] = useState<Number>(0);
  const router = useRouter();
  const returnParam = (keyWord: string) => {
    return router.asPath.split(keyWord + '=')[1].split('&')[0];
  };

  useEffect(() => {
    if (!router) return;
    setLat(Number(returnParam('lat')));
    setLng(Number(returnParam('lng')));
    setLoading(false);
  }, []);
  return (
    <>
      {isLoading && isLoading ? (
        <Loading />
      ) : (
        <MapUI>
          <Map
            center={{ lat: Number(isLat), lng: Number(isLng) }}
            style={{ width: '100%', height: '100vh' }}
          >
            <MapMarker
              position={{ lat: Number(isLat), lng: Number(isLng) }}
              image={{
                src: 'https://hswhereareyou.netlify.app/images/img_here.png',
                size: {
                  width: 50,
                  height: 65,
                },
                options: {
                  offset: {
                    x: 25,
                    y: 65,
                  },
                },
              }}
            ></MapMarker>
          </Map>
          <BtnShare onClick={() => Router.push('/')}>내 위치도 공유하러 가기</BtnShare>
        </MapUI>
      )}
    </>
  );
};
export default LocationView;
