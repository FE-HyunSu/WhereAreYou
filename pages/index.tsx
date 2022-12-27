import React, { useState, useEffect } from 'react';
import Loading from '../components/loading';
import ErrorBox from '../components/error';
import { useRecoilState } from 'recoil';
import { locationAtom, headerTitle } from '../store/store';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.min.css';

const Index = () => {
  SwiperCore.use([Autoplay]);
  const [isHeaderTitleRecoil, setHeaderTitleRecoil] = useRecoilState(headerTitle);
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [isError, setError] = useState<Boolean>(false);
  const [isPosition, setPosition] = useRecoilState(locationAtom);
  const locationSet = async () => {
    try {
      await navigator.geolocation.getCurrentPosition((position) => {
        setPosition({
          lat: Number(position.coords.latitude),
          lng: Number(position.coords.longitude),
        });
      });
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    } catch {
      setLoading(false);
      setError(true);
    }
  };
  useEffect(() => {
    locationSet();
    setHeaderTitleRecoil('거기 지금 여기야');
  }, []);
  return (
    <>
      {isLoading && isLoading ? (
        <Loading />
      ) : isError && isError ? (
        <ErrorBox />
      ) : (
        <>
          <div>
            <Swiper
              className="etc-info-slide"
              direction={'vertical'}
              autoHeight={true}
              slidesPerView={1}
              autoplay={{ delay: 3000 }}
            >
              <SwiperSlide>
                <p>
                  ☀️ 최고기온 : <span>&nbsp;test</span>
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p>
                  🌥 최저기온 : <span>&nbsp;test2</span>
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p>
                  🧭 풍향 : <span>&nbsp;test3</span>
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p>🌊 풍속 : test4</p>
              </SwiperSlide>
            </Swiper>
          </div>
        </>
      )}
    </>
  );
};

export default Index;
