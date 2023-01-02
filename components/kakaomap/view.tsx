import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getGeoCode } from '../../api/api';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { MapUI, MarckerItem, BtnShare } from './style';
import { useRecoilState } from 'recoil';
import { headerTitle } from '../../store/store';
import Router from 'next/router';
import Loading from '../../components/loading';

const LocationView = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [isLat, setLat] = useState<Number>(0);
  const [isLng, setLng] = useState<Number>(0);
  const [isHeaderTitleRecoil, setHeaderTitleRecoil] = useRecoilState(headerTitle);
  const [isAddress, setAddress] = useState<String>('');
  const returnParam = (keyWord: string) => {
    return router.asPath.split(keyWord + '=')[1].split('&')[0];
  };
  const getAddressInfo = async (lat: Number, lon: Number) => {
    try {
      const responseGeo = await getGeoCode(lat, lon);
      const responseAddress =
        responseGeo.data.response.result[0].structure.level1 +
        responseGeo.data.response.result[0].structure.level2 +
        responseGeo.data.response.result[0].structure.level3 +
        responseGeo.data.response.result[0].structure.level4A +
        responseGeo.data.response.result[0].structure.level4AC +
        responseGeo.data.response.result[0].structure.level4L;
      setHeaderTitleRecoil(responseAddress === `` ? `여기 지금 어디야` : responseAddress);
      setAddress(responseAddress);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!router) return;
    setLat(Number(returnParam('lat')));
    setLng(Number(returnParam('lng')));
    getAddressInfo(Number(returnParam('lat')), Number(returnParam('lng')));
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
