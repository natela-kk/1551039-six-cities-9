export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  Main  = '/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const CITIES = [
  {location: {
    latitude: 48.8534,
    longitude:  2.3488,
    zoom: 10,
  },
  name: 'Paris',
  },
  {
    location: {
      latitude: 50.9333,
      longitude:  6.95,
      zoom: 10,
    },
    name: 'Cologne',
  },
  {
    location: {
      latitude: 50.8333,
      longitude:  4.3333,
      zoom: 10,
    },
    name: 'Brussels',
  },
  {
    location: {
      latitude: 52.374,
      longitude:  4.88969,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  {
    location: {
      latitude: 53.5531769,
      longitude: 9.9899464,
      zoom: 10,
    },
    name: 'Hamburg',
  },
  {
    location: {
      latitude: 51.2217,
      longitude: 6.77616,
      zoom: 10,
    },
    name: 'Dusseldorf',
  },
];


export const SORT_TYPE = {
  popular: 'Popular',
  priceAsc: 'Price: low to high',
  priceDes: 'Price: high to low',
  topRated: 'Top rated first',
};

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
}

export const TIMEOUT_SHOW_ERROR = 2000;

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}
