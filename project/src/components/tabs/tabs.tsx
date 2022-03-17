
import {changeCityAction, createOfferListAction} from '../../action';
import { CITIES } from '../../const';
import { useAppDispatch } from '../../hooks';

type TabsProps = {
  currentsCity: string;
}

function Tabs({currentsCity}: TabsProps): JSX.Element {

  const dispatch = useAppDispatch();

  const handleClick = (targetCity: string): void => {
    dispatch(changeCityAction(targetCity));
    dispatch(createOfferListAction());
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <li className="locations__item" onClick={() => {handleClick(city);}} key={city} >
              <a className={`locations__item-link tabs__item ${currentsCity === city && 'tabs__item--active'}`} >
                <span>{city}</span>
              </a>
            </li>
          ),
          )}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
