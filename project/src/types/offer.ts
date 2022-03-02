export type Review = {
  rating : number;
  description: string;
  userName: string;
  userAvatar: string;
  date: string;
};

export type Offer = {
  id: number;
  title: string;
  rating: number;
  type: string;
  bedrooms: number;
  capacity: number;
  price: number;
  features: string[];
  hostName: string;
  description: string;
  reviews: Review[];
};
