
import {store} from '../../store/index';
import {changeCityAction, createOfferListAction} from '../../action';

const addClickListener = (targetCity: string): void => {
  store.dispatch(changeCityAction(targetCity));
  store.dispatch(createOfferListAction());
  console.log(targetCity);
  console.log(store.getState());
};


function Tabs(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <li className="locations__item" onClick={() => {addClickListener('Paris');}} >
            <a className="locations__item-link tabs__item  tabs__item--active" >
              <span>Paris</span>
            </a>
          </li>
          <li className="locations__item" onClick={() => {addClickListener('Cologne');}}>
            <a className="locations__item-link tabs__item" >
              <span>Cologne</span>
            </a>
          </li>
          <li className="locations__item" onClick={() => {addClickListener('Brussels');}}>
            <a className="locations__item-link tabs__item" >
              <span>Brussels</span>
            </a>
          </li>
          <li className="locations__item" onClick={() => {addClickListener('Amsterdam');}}>
            <a className="locations__item-link tabs__item" >
              <span>Amsterdam</span>
            </a>
          </li>
          <li className="locations__item" onClick={() => {addClickListener('Hamburg');}}>
            <a className="locations__item-link tabs__item" >
              <span>Hamburg</span>
            </a>
          </li>
          <li className="locations__item"  onClick={() => {addClickListener('Dusseldorf');}}>
            <a className="locations__item-link tabs__item" >
              <span>Dusseldorf</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
