import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import {Offer} from '../../types/offer';
import useMap from '../../hooks/use-map';
import leaflet from 'leaflet';

type MapProps = {
  className: string;
  offers: Offer[];
  selectedPoint?: number;
};


function Map({ className, offers, selectedPoint}: MapProps): JSX.Element {
  const city = offers[0].city;
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
    if (map && (selectedPoint || selectedPoint === 0)) {
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
