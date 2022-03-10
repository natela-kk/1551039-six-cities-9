import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import {Offer} from '../../types/offer';
import useMap from './useMap';
import leaflet from 'leaflet';

type MapProps = {
  className: string;
  offers: Offer[];
};

function Map({ className, offers}: MapProps): JSX.Element {
  const city = offers[0].city;

  type point = {
    title: string,
    lat: number,
    lng: number,
  }
  const points: point[] = [];

  offers.forEach((offer) => {
    const point = {
      title: offer.title,
      lat: offer.location.latitude,
      lng: offer.location.longitude,
    };
    points.push(point);
  });

  const mapRef = useRef(null);
  const map = useMap(mapRef, city.location);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: '../../../public/img/pin-active.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.lat,
            lng: point.lng,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
        console.log(point);
      });
    }
  }, [map, points]);

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
