import {useAppDispatch} from '../../hooks';
import {changeSortTypeAction} from '../../action';
import {SORT_TYPE} from '../../const';
import cn from 'classnames';
import { useState } from 'react';

type SortProps = {
  sortType: string;
}

function Sort({sortType}: SortProps): JSX.Element {
  const [isOpened, openSortList] = useState(false);

  const handleDocumentClick = () => {
    const sortList = document.querySelector('.places__sorting-type');
    document.addEventListener('click', (evt) => {
      if(evt.target !== sortList && isOpened) {
        changeSortState();
      }
    });
  };

  handleDocumentClick();

  const changeSortState = () => {
    openSortList(!isOpened);
  };


  const dispatch = useAppDispatch();

  const handleClick = (sort: string): void => {
    dispatch(changeSortTypeAction(sort));
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      {' '}
      <span className="places__sorting-type" tabIndex={0} onClick={() => {
        changeSortState();
      }}
      >
                Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={cn('places__options places__options--custom', {'places__options--opened ': isOpened})}>
        {Object.entries(SORT_TYPE).map(([key, label]) => (
          <li
            key={key}
            className={cn('places__option', {'places__option--active': sortType === label})}
            tabIndex={0}
            onClick={() => {
              handleClick(label);
            }}
          >
            {label}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sort;
