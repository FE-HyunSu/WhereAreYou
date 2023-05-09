import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getGeoCode } from '../../api/api';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import styled, { keyframes } from 'styled-components';
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

const MotionBounce = keyframes`
  0%{transform: translateY(0);}
  100%{transform: translateY(-1rem);}
`;

const MapUI = styled.div`
  display: block;
  position: relative;
  height: 100vh;
  @supports (-webkit-appearance: none) and (stroke-color: transparent) {
    height: -webkit-fill-available;
  }
  z-index: 10;
  #react-kakao-maps-sdk-map-container {
    div {
      div {
        div {
          div {
            img {
              animation: ${MotionBounce} 1s alternate infinite;
            }
          }
        }
      }
    }
  }
`;

const BtnShare = styled.button`
  display: block;
  position: absolute;
  top: 75%;
  right: 0;
  left: 0;
  width: 25rem;
  margin: auto;
  padding: 2rem 0;
  background-color: #fbe64d;
  border-radius: 10rem;
  color: #3a3a3a;
  font-size: 1.4rem;
  font-weight: 500;
  z-index: 10;
`;
