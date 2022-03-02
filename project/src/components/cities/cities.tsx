import Sort from '../sort/sort';
import Map from '../map/map';
import CardList from '../card-list/card-list';
import {Offer} from '../../types/offer';

type CitiesProps = {
  count: number;
  offers: Offer[];
}

function Cities({count, offers}: CitiesProps): JSX.Element {
  console.log(offers);
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{count} places to stay in Amsterdam</b>

          <Sort />

          <CardList offers={offers}/>

        </section>
        <div className="cities__right-section">

          <Map />

        </div>
      </div>
    </div>
  );
}

export default Cities;
