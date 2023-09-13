import React, { useRef, useEffect } from 'react';
import { Coordinates } from '@/types/store';
import { INITIAL_CENTER, INITIAL_ZOOM } from '@/hooks/useMaps';
import Script from 'next/script';
import { NaverMap } from '../../types/map';
import styles from '../../styles/map.module.scss';

interface props {
  initialCenter?: Coordinates;
  initialZoom?: number;
  onLoad?: (map: NaverMap) => void;
}

export default function Map({
  initialCenter = INITIAL_CENTER,
  initialZoom = INITIAL_ZOOM,
  onLoad,
}: props) {
  const mapRef = useRef<NaverMap | null>(null);
  const initializeMap = () => {
    const mapOptions = {
      center: new window.naver.maps.LatLng(...initialCenter),
      zoom: initialZoom,
      minZoom: 9,
      scaleControl: false,
      mapDataControl: false,
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_LEFT,
      },
    };
    const map = new window.naver.maps.Map('map', mapOptions);
    console.log(map, '맵 객체');
    /*   mapRef.current = map; */
    if (onLoad) {
      onLoad(map);
    }
  };
  useEffect(() => {
    return () => {
      /*  mapRef.current?.destroy(); */
    };
  }, []);
  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}&callback=initMap`}
        onReady={initializeMap}
      />
      <div id="map" className={styles.map} />
    </>
  );
}
