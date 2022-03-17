import Sort from '../sort/sort';
import Map from '../map/map';
import CardList from '../card-list/card-list';
import {Offer, City} from '../../types/offer';
import {useState} from 'react';

type CitiesProps = {
  offers: Offer[];
  sortType: string;
  currentsCity: City;
}

function Cities({offers, sortType, currentsCity}: CitiesProps): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<null | number | undefined>(null);

  const handleHover = (newId: number) => {
    setSelectedPoint(newId);
  };

  const handleLeave = (newId: null | undefined) => {
    setSelectedPoint(newId);
  };

  const getSortedOffers = (sort: string) => {
    switch(sort) {
      case('Price: low to high'): {
        return offers.sort((prev, next) => prev.price - next.price);
      }
      case('Price: high to low'): {
        return offers.sort((prev, next) => next.price - prev.price);
      }
      case('Top rated first'): {
        return offers.sort((prev, next) => next.rating - prev.rating);
      }
      default: return offers;
    }
  };

  const sortedOffers = getSortedOffers(sortType);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {currentsCity.name}</b>

          <Sort sortType={sortType}/>

          <CardList offers={sortedOffers} onOfferHover={handleHover} onOfferLeave={handleLeave} classList={['cities__places-list tabs__content']} />

        </section>
        <div className="cities__right-section">

          <Map className='cities__map' offers={offers} selectedPoint={selectedPoint} city={currentsCity} />

        </div>
      </div>
    </div>
  );
}

export default Cities;
