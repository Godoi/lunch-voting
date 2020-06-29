export interface IUser {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  password?: string;
}
export interface ILogin {
  email: string,
  restaurant_id: number
}