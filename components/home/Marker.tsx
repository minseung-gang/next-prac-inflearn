import React, { useEffect } from 'react';
import { Marker } from '@/types/map';

const Marker = ({ map, coordinates, icon, onClick }: Marker): null => {
  useEffect(() => {
    let marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(...coordinates),
      map,
      icon,
    });
    if (onClick) {
      naver.maps.Event.addListener(marker, 'click', onClick);
    }

    return () => {
      marker?.setMap(null);
    };
  }, []);
  return null;
};

export default Marker;
