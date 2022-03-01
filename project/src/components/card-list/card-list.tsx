import CardComponent from '../card/card';

function CardList(): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </div>
  );
}

export default CardList;
