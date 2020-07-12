import React from 'react';
import GalleryItem from '../../components/GalleryItem/GalleryItem';
import { Places } from '../../interfaces/places.interface';

export default (props: { featured: Places[] }) => {
  return (
    <React.Fragment>
      <h2 className="popular__title">Featured</h2>

      <div className="popular__gallery">
        {props.featured.map((item, index) => {
          return <GalleryItem key={'g_' + index} {...item} />;
        })}
      </div>
    </React.Fragment>
  );
};
