import Card from '../card/card';
import { Offer } from '../../types/offer';


type OfferProps = {
  offers: Offer[];
  onOfferHover:(id: number) => void;
  classList: string[];
}

function CardList({offers, onOfferHover, classList}: OfferProps): JSX.Element {

  return (
    <div className={`${classList} places__list`}>
      {offers.map((offer) => (
        <Card offer={offer} key={offer.id} onOfferHover={onOfferHover}/>
      ))}
    </div>
  );
}

export default CardList;
