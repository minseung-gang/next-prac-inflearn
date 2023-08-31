import Map from './Map';
import useMaps from '../../hooks/useMaps';
import { NaverMap } from '../../types/map';

const MapSection = () => {
  const initializeMaps = useMaps();
  const onLoadMap = (map: NaverMap) => {
    initializeMaps(map);
  };
  return <Map onLoad={onLoadMap} />;
};
export default MapSection;
