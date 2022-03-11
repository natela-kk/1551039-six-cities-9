import Card from '../card/card';
import { Offer } from '../../types/offer';


type OfferProps = {
  offers: Offer[];
  onOfferHover:(id: number) => void;
}

function CardList({offers, onOfferHover}: OfferProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card offer={offer} key={offer.id} onOfferHover={onOfferHover}/>
      ))}
    </div>
  );
}

export default CardList;
