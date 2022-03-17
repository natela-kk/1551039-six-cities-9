import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import {Offer, City} from '../../types/offer';
import useMap from '../../hooks/use-map';
import leaflet from 'leaflet';
import {LayerGroup} from 'leaflet';

type MapProps = {
  className: string;
  offers: Offer[];
  selectedPoint?: number | null;
  city: City;
};

function Map({ className, offers, selectedPoint, city}: MapProps): JSX.Element {
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

  const clearMarkers = (group: leaflet.LayerGroup<any>) => group.clearLayers();

  const createMarkers = (group: leaflet.LayerGroup<any> | leaflet.Map) => {
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
        .addTo(group);
    });
  };

  useEffect(() => {
    if (map) {
      const markerGroup = new LayerGroup().addTo(map);

      clearMarkers(markerGroup);
      createMarkers(markerGroup);

      map.setView([city.location.latitude, city.location.longitude]);
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
