import {useAppDispatch} from '../../hooks';
import {changeSortTypeAction} from '../../action';

type SortProps = {
  sortType: string;
}

function Sort({sortType}: SortProps): JSX.Element {

  const dispatch = useAppDispatch();

  const handleClick = (sort: string): void => {
    dispatch(changeSortTypeAction(sort));
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
        <li className={`places__option ${sortType === 'Popular' && 'places__option--active'}`} tabIndex={0} onClick={() => {handleClick('Popular');}}>Popular</li>
        <li className={`places__option ${sortType === 'Price: low to high' && 'places__option--active'}`} tabIndex={0} onClick={() => {handleClick('Price: low to high');}}>Price: low to high</li>
        <li className={`places__option ${sortType === 'Price: high to low' && 'places__option--active'}`} tabIndex={0} onClick={() => {handleClick('Price: high to low');}}>Price: high to low</li>
        <li className={`places__option ${sortType === 'Top rated first' && 'places__option--active'}`} tabIndex={0} onClick={() => {handleClick('Top rated first');}}>Top rated first</li>
      </ul>
    </form>
  );
}

export default Sort;
