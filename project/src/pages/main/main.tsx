import Tabs from '../../components/tabs/tabs';
import Cities from '../../components/cities/cities';
import Header from '../../components/header/header';

type MainProps = {
  count: number;
}

function Main({count}: MainProps): JSX.Element {
  return (
    <div className="page page--gray page--main">

      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <Tabs />

        <Cities count={count} />
      </main>
    </div>);
}

export default Main;
