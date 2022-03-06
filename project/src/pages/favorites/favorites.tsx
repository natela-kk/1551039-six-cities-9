import Header from '../../components/header/header';
import {Offer} from '../../types/offer';
import Card from '../../components/card/card';
import {useState} from 'react';


type FavoriteProps = {
  offers: Offer[];
}


function Favorites({offers}: FavoriteProps): JSX.Element {

  const cities: string[] = [];

  offers.forEach((offer) => {
    if(offer.isFavorite && offer.city.name) {
      cities.push(offer.city.name);
    }
  });

  const favoriteCities = [...new Set(cities)];

  const [, setOfferId] = useState(0);

  const handleHover = (id: number) => {
    setOfferId(id);
  };

  return(
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>

            <ul className="favorites__list">
              {favoriteCities.map((city: string) => (
                <li className="favorites__locations-items" key={city}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="/">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {offers.map((offer) => ( offer.isFavorite && offer.city.name === city &&
                    <Card offer={offer} key={offer.id} onOfferHover={handleHover} isSmall />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
        </a>
      </footer>
    </div>
  );
}

export default Favorites;

