import React from 'react';
import pin from '../../assets/img/pin.svg';
import { Places } from '../../interfaces/places.interface';

const GalleryItem = (props: Places) => {
  return (
    <React.Fragment>
      <div className="popular__gallery-element">
        <img src={props.img} alt="" className="popular__gallery-img" />

        <div className="popular__gallery-description">
          <h3>{props.title}</h3>
          <h4>
            <img src={pin} alt="pin" className="popular__gallery-icon" />
            {props.location}
          </h4>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GalleryItem;
