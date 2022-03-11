import CommentList from '../../components/comment-list/comment-list';
import CommentForm from '../../components/comment-form/comment-form';
import Features from '../../components/goods/goods';
import Header from '../../components/header/header';
import Gallery from '../../components/gallery/gallery';
import Host from '../../components/host/host';
import Map from '../../components/map/map';
import { Offer } from '../../types/offer';
import {comments} from '../../mocks/comments';
import { useParams } from 'react-router-dom';
import CardList from '../../components/card-list/card-list';
import { useState } from 'react';

type PropertyProps = {
  offers: Offer[];
}

function Property({offers}: PropertyProps): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState(0.1);

  const handleHover = (id: number) => {
    const currentPoint = offers.find((offer) =>
      offer.id === id,
    );

    if(currentPoint) {
      setSelectedPoint(currentPoint.id);
    }
  };


  const params = useParams();
  const offerId = Number(params.id);
  const property = offers[offerId];
  const nearbyOffers = (offers.filter((offer) => offer !== property)).slice(0,3);

  return(
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">

          <Gallery images={property.images}/>

          <div className="property__container container">
            <div className="property__wrapper">
              {property.isPremium &&
              <div className="property__mark">
                <span>Premium</span>
              </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {property.title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">
                    `{property.isFavorite ? 'In' : 'To'}` bookmarks
                  </span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${property.rating/5*100}%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{property.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {property.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {property.bedrooms} {property.bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}
                </li>
                <li className="property__feature property__feature--adults">
                Max {property.maxAdults} {property.maxAdults > 1 ? 'adults' : 'adult'}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{property.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>

              <Features features={property.goods}/>

              <Host offer={property}/>

              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews ·{' '}
                  <span className="reviews__amount">{comments.length}</span>
                </h2>

                <CommentList />

                <CommentForm />

              </section>
            </div>
          </div>

          <Map className="property__map" offers={nearbyOffers} selectedPoint={selectedPoint} />
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>

            <CardList offers={nearbyOffers} onOfferHover={handleHover} classList={['near-places__list']}/>

          </section>
        </div>
      </main>
    </div>
  );
}

export default Property;
