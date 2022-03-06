import Card from '../card/card';
import { Offer } from '../../types/offer';
import {useState} from 'react';


type OfferProps = {
  offers: Offer[];
}

function CardList({offers}: OfferProps): JSX.Element {
  const [, setOfferId] = useState(0);

  const handleHover = (id: number) => {
    setOfferId(id);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card offer={offer} key={offer.id} onOfferHover={handleHover}/>
      ))}
    </div>
  );
}

export default CardList;
