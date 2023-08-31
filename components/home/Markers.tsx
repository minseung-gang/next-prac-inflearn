import { MAP_KEY } from '@/hooks/useMaps';
import { STORE_KEY } from '@/hooks/useStores';
import { NaverMap } from '@/types/map';
import { Store } from '@/types/store';
import React from 'react';
import useSWR from 'swr';
import Marker from './Marker';

const Markers = () => {
  //  const { data, error, isValidating, revalidate } = useSWR(key, fetcher);
  const { data: map } = useSWR<NaverMap>(MAP_KEY);
  const { data: stores } = useSWR<Store[]>(STORE_KEY);

  if (!map || !stores) return null;

  return (
    <>
      {stores.map((store) => {
        return (
          <Marker
            map={map}
            coordinates={store.coordinates}
            key={store.nid}
            icon={storeMarkerIcon(store.season)}
          />
        );
      })}
    </>
  );
};

export default Markers;

const MARKER_HEIGHT = 64;
const MARKER_WIDTH = 54;
const NUMBER_OF_MARKER = 13;
const SCALE = 2 / 3;
const SCALED_MARKER_WIDTH = MARKER_WIDTH * SCALE;
const SCALED_MARKER_HEIGHT = MARKER_HEIGHT * SCALE;
const ICON_SPRITE_IMAGE_URL = '/images/markers.png';

export function storeMarkerIcon(markerIndex: number) {
  return {
    url: ICON_SPRITE_IMAGE_URL,
    size: new naver.maps.Size(SCALED_MARKER_WIDTH, SCALED_MARKER_HEIGHT), // 이미지 크기
    origin: new naver.maps.Point(SCALED_MARKER_WIDTH * markerIndex, 0), // 스프라이트 이미지에서 클리핑 위치
    scaledSize: new naver.maps.Size(
      MARKER_WIDTH * NUMBER_OF_MARKER,
      MARKER_HEIGHT
    ),
  };
}
