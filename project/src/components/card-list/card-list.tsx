import CardComponent from '../card/card';
import { Offer } from '../../types/offer';


type OfferProps = {
  offers: Offer[];
}

function CardList({offers}: OfferProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      <CardComponent offer={offers[0]}/>
      <CardComponent offer={offers[1]}/>
      <CardComponent offer={offers[2]}/>
      <CardComponent offer={offers[3]}/>
      <CardComponent offer={offers[0]}/>
    </div>
  );
}

export default CardList;
