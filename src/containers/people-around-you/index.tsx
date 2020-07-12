import React from 'react';

// import Swiper core and required components
import SwiperCore, { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import SliderItems from '../../components/SliderItems/SliderItems';
import { Places } from '../../interfaces/places.interface';

// install Swiper components
SwiperCore.use([Navigation]);

export default (props: { peopleAround: Places[] }) => {
  return (
    <React.Fragment>
      <h2 className="popular__title">Popular around you</h2>
      <div className="popular__slider">
        <div className="swiper-container">
          <Swiper
            navigation={{}}
            autoHeight
            setWrapperSize
            centeredSlides={false}
            spaceBetween={20}
            slidesPerView={4}
            loop={true}
          >
            {props.peopleAround.map((item: Places, index: number) => {
              return (
                <SwiperSlide key={index}>
                  <SliderItems {...item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </React.Fragment>
  );
};
