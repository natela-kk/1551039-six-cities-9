import Card from '../card/card';
import { Offer } from '../../types/offer';
import {useState} from 'react';


type OfferProps = {
  offers: Offer[];
}

function CardList({offers}: OfferProps): JSX.Element {

  const [offerId, setOfferId] = useState(0);

  const handlerSetOfferId = (property: Offer) => {
    setOfferId(property.id);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card offer={offer} key={offer.id} handlerSetOfferId={handlerSetOfferId}/>
      ))}
    </div>
  );
}

export default CardList;
