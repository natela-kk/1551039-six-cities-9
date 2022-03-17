import Tabs from '../../components/tabs/tabs';
import Cities from '../../components/cities/cities';
import Header from '../../components/header/header';
import {useAppSelector} from '../../hooks';

function Main(): JSX.Element {
  const {city, offers} = useAppSelector((state) => state);

  return (
    <div className="page page--gray page--main">

      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <Tabs currentsCity={city}/>

        <Cities offers={offers.filter((offer) => offer.city.name === city)}/>
      </main>
    </div>);
}

export default Main;
