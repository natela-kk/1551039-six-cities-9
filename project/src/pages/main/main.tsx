import Tabs from './tabs';
import Cities from './cities';
import Header from './header';

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
