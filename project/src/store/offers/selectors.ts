import {NameSpace} from '../../const';
import {Offer} from '../../types/offer';
import {State} from '../../types/state';

export const loadOffers = (state: State): Offer[] => state[NameSpace.offers].offers;

export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.offers].isDataLoaded;

export const loadProperty = (state: State): Offer | null => state[NameSpace.offers].property;

export const loadNearby = (state: State): Offer[] => state[NameSpace.offers].nearby;

export const loadFavorites = (state: State): Offer[] => state[NameSpace.offers].favorites;

export const getLoadedFavoritesStatus = (state: State): boolean => state[NameSpace.offers].isFavoritesLoaded;
