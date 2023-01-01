import React, { useState, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { MapUI, MarckerItem, BtnShare } from './style';
import { useRecoilValue, useRecoilState } from 'recoil';
import { locationAtom, currentLocation } from '../../store/store';
import { getGeoCode } from '../../api/api';
import Loading from '../../components/loading';
import { useRouter } from 'next/router';

const KakaoMap = () => {
  const [isLoading, setLoading] = useState<Boolean>(true);
  const recoilLocation = useRecoilValue(locationAtom);
  const [useLocation, setUseLocation] = useRecoilState(currentLocation);
  const [isLat, setLat] = useState<Number>(0);
  const [isLng, setLng] = useState<Number>(0);
  const router = useRouter();
  const returnParam = (keyWord: string) => {
    return router.asPath.split(keyWord + '=')[1].split('&')[0];
  };
  const getInfoWeather = async (lat: Number, lon: Number) => {
    try {
      const responseGeo = await getGeoCode(lat, lon);
      setLoading(false);
      setUseLocation(
        responseGeo.data.response.result[0].structure.level1 +
          ` ` +
          responseGeo.data.response.result[0].structure.level2 +
          ` ` +
          responseGeo.data.response.result[0].structure.level3 +
          ` ` +
          responseGeo.data.response.result[0].structure.level4A
      );
    } catch {
      setLoading(false);
    }
  };
  const kakaoShare = () => {
    const { Kakao, location } = window;
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '✨ 나는 지금 여기야',
        description: `${useLocation}`,
        imageUrl: 'https://hswhereareyou.netlify.app/img_meta.png',
        link: {
          mobileWebUrl: `https://hswhereareyou.netlify.app/view?lat=${recoilLocation.lat}&lng=${recoilLocation.lng}`,
          webUrl: `https://hswhereareyou.netlify.app/view?lat=${recoilLocation.lat}&lng=${recoilLocation.lng}`,
        },
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: `https://hswhereareyou.netlify.app/view?lat=${recoilLocation.lat}&lng=${recoilLocation.lng}`,
            webUrl: `https://hswhereareyou.netlify.app/view?lat=${recoilLocation.lat}&lng=${recoilLocation.lng}`,
          },
        },
      ],
      // 카카오톡 미설치 시 카카오톡 설치 경로이동
      installTalk: true,
    });
  };

  useEffect(() => {
    if (!router) return;
    setLat(Number(returnParam('lat')));
    setLng(Number(returnParam('lng')));
    getInfoWeather(Number(returnParam('lat')), Number(returnParam('lng')));
    setLoading(false);
  }, []);

  return (
    <>
      {isLoading && isLoading ? (
        <Loading />
      ) : (
        <MapUI>
          <Map
            center={{ lat: Number(recoilLocation.lat), lng: Number(recoilLocation.lng) }}
            style={{ width: '100%', height: '100vh' }}
          >
            <MapMarker
              position={{ lat: Number(recoilLocation.lat), lng: Number(recoilLocation.lng) }}
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
            {/* <MarckerItem>나는 지금 여기야</MarckerItem> */}
          </Map>
          <BtnShare onClick={() => kakaoShare()}>카카오톡으로 위치 공유하기</BtnShare>
        </MapUI>
      )}
    </>
  );
};
export default KakaoMap;
