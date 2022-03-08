import Tabs from '../../components/tabs/tabs';
import Cities from '../../components/cities/cities';
import Header from '../../components/header/header';
import {Offer} from '../../types/offer';

type MainProps = {
  count: number;
  offers: Offer[];
}

function Main({count, offers}: MainProps): JSX.Element {
  return (
    <div className="page page--gray page--main">

      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <Tabs />

        <Cities count={count} offers={offers}/>
      </main>
    </div>);
}

export default Main;
