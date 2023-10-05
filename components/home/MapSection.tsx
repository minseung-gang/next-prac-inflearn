import Map from './Map';
import Markers from './Markers';
import useMap, { INITIAL_CENTER, INITIAL_ZOOM } from '@/hooks/useMaps';
import type { NaverMap } from '../../types/map';
import useCurrentStore from '@/hooks/useCurrentStore';
import { Coordinates } from '@/types/store';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

const MapSection = () => {
  const router = useRouter();
  const query = useMemo(() => new URLSearchParams(router.asPath.slice(1)), []);

  const initialCenter = useMemo<Coordinates>(
    () =>
      query.get('lat') && query.get('lng')
        ? [Number(query.get('lat')), Number(query.get('lng'))]
        : INITIAL_CENTER,
    [query]
  );
  const initialZoom = useMemo(
    () => (query.get('zoom') ? Number(query.get('zoom')) : INITIAL_ZOOM),
    [query]
  );

  const { initializeMap } = useMap();
  const { clearCurrentStore } = useCurrentStore();
  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
    naver.maps.Event.addListener(map, 'click', clearCurrentStore);
  };

  return (
    <>
      <Map
        onLoad={onLoadMap}
        initialCenter={initialCenter}
        initialZoom={initialZoom}
      />
      <Markers />
    </>
  );
};
export default MapSection;
