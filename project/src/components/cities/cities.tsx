import Sort from '../sort/sort';
import Map from '../map/map';
import CardList from '../card-list/card-list';
import {Offer} from '../../types/offer';
import {useState} from 'react';
import {store} from '../../store/index';

type CitiesProps = {
  count: number;
  offers: Offer[];
}

function Cities({count, offers}: CitiesProps): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<null | number | undefined>(null);

  const handleHover = (newId: number) => {
    setSelectedPoint(newId);
  };

  const handleLeave = (newId: null | undefined) => {
    setSelectedPoint(newId);
  };


  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{count} places to stay in Amsterdam</b>

          <Sort />

          <CardList offers={store.getState().offersList} onOfferHover={handleHover} onOfferLeave={handleLeave} classList={['cities__places-list tabs__content']} />

        </section>
        <div className="cities__right-section">

          <Map className='cities__map' offers={offers} selectedPoint={selectedPoint} />

        </div>
      </div>
    </div>
  );
}

export default Cities;
