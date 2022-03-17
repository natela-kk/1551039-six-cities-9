import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import {Offer} from '../../types/offer';
import useMap from '../../hooks/use-map';
import leaflet from 'leaflet';

type MapProps = {
  className: string;
  offers: Offer[];
  selectedPoint?: number | null;
};

function Map({ className, offers, selectedPoint}: MapProps): JSX.Element {
  let city;
  if(offers.length > 0) {
    city = offers[0].city;
  } else {
    city = {
      location: {
        latitude: 52.374,
        longitude:  4.88969,
        zoom: 10,
      },
      name: 'Amsterdam',
    };
  }

  const mapRef = useRef(null);
  const map = useMap(mapRef, city.location);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: './img/pin.svg',
    iconSize: [27, 39],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: './img/pin-active.svg',
    iconSize: [27, 39],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (offer.id === selectedPoint)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers, selectedPoint]);

  return (
    <section className={`${className} map`}>
      <div
        style={{height: '100%'}}
        ref={mapRef}
      >
      </div>
    </section>
  );
}

export default Map;
