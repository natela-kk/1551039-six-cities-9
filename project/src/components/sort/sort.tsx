import {useAppSelector} from '../../hooks';


function Sort(): JSX.Element {
  const {city, offers} = useAppSelector((state) => state);

  const filteredOffers = offers.filter((offer) => offer.city.name === city);

  const sortPriceToHigh = () => {
console.log(filteredOffers.sort((prev, next) => prev.price - next.price));
  };

  const sortPriceToLow = () => {
console.log(filteredOffers.sort((prev, next) => next.price - prev.price));
  };

  const sortByRating = () => {
console.log(filteredOffers.sort((prev, next) => next.rating - prev.rating));
  };

  const sortByPopular = () => {
console.log(filteredOffers);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
                Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        <li className="places__option places__option--active" tabIndex={0} onClick={sortByPopular}>Popular</li>
        <li className="places__option" tabIndex={0} onClick={sortPriceToHigh}>Price: low to high</li>
        <li className="places__option" tabIndex={0} onClick={sortPriceToLow}>Price: high to low</li>
        <li className="places__option" tabIndex={0} onClick={sortByRating}>Top rated first</li>
      </ul>
    </form>
  );
}

export default Sort;
