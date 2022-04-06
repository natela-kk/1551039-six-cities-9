import {NameSpace} from '../../const';
import {Offer} from '../../types/offer';
import {State} from '../../types/state';

export const loadNearby = (state: State): Offer[] => state[NameSpace.nearby].nearby;
