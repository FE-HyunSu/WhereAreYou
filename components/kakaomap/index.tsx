import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { MapUI, MarckerItem, BtnShare } from './style';
import { useRecoilValue } from 'recoil';
import { locationAtom } from '../../store/store';

const KakaoMap = () => {
  const recoilLocation = useRecoilValue(locationAtom);
  const kakaoShare = () => {
    const { Kakao, location } = window;
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '✨ 거기 지금 여기야',
        description: '나는 지금 여기야',
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
  return (
    <>
      <MapUI>
        <Map
          center={{ lat: Number(recoilLocation.lat), lng: Number(recoilLocation.lng) }}
          style={{ width: '100%', height: '100vh' }}
        >
          <div className="test">
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
          </div>
        </Map>
        <BtnShare onClick={() => kakaoShare()}>카카오톡으로 위치 공유하기</BtnShare>
      </MapUI>
    </>
  );
};
export default KakaoMap;
