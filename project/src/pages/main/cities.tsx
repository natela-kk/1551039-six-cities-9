import Sort from './sort';
import Map from './map';
import CardList from './card-list';

type CitiesProps = {
  count: number;
}

function Cities({count}: CitiesProps): JSX.Element {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{count} places to stay in Amsterdam</b>

          <Sort />

          <CardList />

        </section>
        <div className="cities__right-section">

          <Map />

        </div>
      </div>
    </div>
  );
}

export default Cities;
