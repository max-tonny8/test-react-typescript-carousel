import React from 'react';
import pin from '../../assets/img/pin.svg';
import { Places } from '../../interfaces/places.interface';

const SliderItems = (props: Places) => {
  return (
    <React.Fragment>
      <div className="swiper-slide popular__slide">
        <img src={props.img} alt="" className="popular__slide-img" />
        <div className="popular__slide-description">
          <h3>{props.title}</h3>
          <h4>
            <img src={pin} alt="pin" className="popular__slide-icon" />
            {props.location}
          </h4>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SliderItems;
