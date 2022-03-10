import 'leaflet/dist/leaflet.css';
import { useRef } from 'react';
import {Offer} from '../../types/offer';
import useMap from './useMap';

type MapProps = {
  className: string;
  offers: Offer[];
};

function Map({ className, offers}: MapProps): JSX.Element {
  const offer = offers[0];

  const mapRef = useRef(null);
  const map = useMap(mapRef, offer);

  return (
    <section className={`${className}`}
      style={{height: '500px'}}
    >
      <div
        style={{height: '500px'}}
        ref={mapRef}
      >
      </div>
    </section>
  );
}

export default Map;
