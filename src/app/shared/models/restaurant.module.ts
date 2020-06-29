export interface IRestaurant {
  id?: number;
  logo?: string;
  name?: string;
  rating?: string;
  menu?: string;
  votes?:IVotes;
}

export interface IVotes {
  emails:[],
  total:number
}
