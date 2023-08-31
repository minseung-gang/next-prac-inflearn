import { Coordinates } from './store';

export type NaverMap = naver.maps.Map;

export type Marker = {
  map: NaverMap;
  coordinates: Coordinates;
  onClick?: () => void;
  icon: ImageIcon;
};

type ImageIcon = {
  url: string;
  size: naver.maps.Size;
  origin: naver.maps.Point;
  scaledSize?: naver.maps.Size;
};
