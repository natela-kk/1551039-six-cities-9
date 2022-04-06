import {NameSpace} from '../../const';
import {Offer} from '../../types/offer';
import {State} from '../../types/state';

export const loadFavorites = (state: State): Offer[] => state[NameSpace.favorites].favorites;
