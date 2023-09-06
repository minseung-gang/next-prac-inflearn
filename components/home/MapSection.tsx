import Map from './Map';
import Markers from './Markers';
import useMap from '@/hooks/useMaps';
import type { NaverMap } from '../../types/map';
import useCurrentStore from '@/hooks/useCurrentStore';

const MapSection = () => {
  const { initializeMap } = useMap();
  const { clearCurrentStore } = useCurrentStore();
  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
    naver.maps.Event.addListener(map, 'click', clearCurrentStore);
  };

  return (
    <>
      <Map onLoad={onLoadMap} />
      <Markers />
    </>
  );
};
export default MapSection;
