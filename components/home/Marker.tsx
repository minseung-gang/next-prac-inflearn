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
      naver.maps.Event.addListener(map, 'click', function (e) {
        marker.setPosition(e.latlng);
      });
    }
    return () => {
      marker?.setMap(null);
    };
  }, []);
  return null;
};

export default Marker;
