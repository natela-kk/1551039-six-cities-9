import Header from '../../components/header/header';
import Card from '../../components/card/card';
import Footer from '../../components/footer/footer';
import {Offer} from '../../types/offer';

type FavoriteProps = {
  offers: Offer[];
}


function Favorites({offers}: FavoriteProps): JSX.Element {

  const favorites = offers.filter((offer) => offer.isFavorite);

  const favoriteCities = [...new Set(favorites.map((offer) => offer.city.name))];

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
                    {offers.map((offer) => ( offer.isFavorite && offer.city.name === city && (
                      <Card offer={offer} key={offer.id} isSmall />
                    )
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Favorites;

