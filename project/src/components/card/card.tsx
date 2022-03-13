import { Offer } from '../../types/offer';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';

type OfferProps = {
  offer: Offer;
  onOfferHover?: (id: number) => void;
  onOfferLeave?:(id: null) => void;
  isSmall?: boolean;
}

function Card({offer, onOfferHover, onOfferLeave, isSmall = false}: OfferProps): JSX.Element {
  const modifier = isSmall ? 'favorites' : 'cities';

  return(

    <article
      className={`${isSmall ? 'favorites__card' : 'cities__place-card'} place-card`}
      onMouseOver={() => onOfferHover?.(offer.id)}
      onMouseLeave={() => onOfferLeave?.(null)}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className={`${modifier}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={`${isSmall ? 150 : 260}`}
            height={`${isSmall ? 110 : 200}`}
            alt={offer.title}
          />
        </Link>
      </div>
      <div className={`${isSmall && 'favorites__card-info'} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${offer.isFavorite && 'place-card__bookmark-button--active'} button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon shadow-root" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">`{offer.isFavorite ? 'In' : 'To'}` bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style = {{width: `${offer.rating / 5 * 100}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default Card;

