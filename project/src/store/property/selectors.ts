import {NameSpace} from '../../const';
import {Offer} from '../../types/offer';
import {State} from '../../types/state';

export const loadProperty = (state: State): Offer | null => state[NameSpace.property].property;
