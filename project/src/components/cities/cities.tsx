import Sort from '../sort/sort';
import Map from '../map/map';
import CardList from '../card-list/card-list';
import {Offer} from '../../types/offer';
import {useState} from 'react';

type CitiesProps = {
  count: number;
  offers: Offer[];
}

function Cities({count, offers}: CitiesProps): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState(0.1);

  const handleHover = (id: number) => {
    const currentPoint = offers.find((offer) =>
      offer.id === id,
    );

    if(currentPoint) {
      setSelectedPoint(currentPoint.id);
    }
  };


  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{count} places to stay in Amsterdam</b>

          <Sort />

          <CardList offers={offers} onOfferHover={handleHover}/>

        </section>
        <div className="cities__right-section">

          <Map className='cities__map' offers={offers} selectedPoint={selectedPoint} />

        </div>
      </div>
    </div>
  );
}

export default Cities;
