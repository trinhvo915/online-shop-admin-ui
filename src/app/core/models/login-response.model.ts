import { IUserProfile } from "./user.model";

export interface ILoginResponse {
  accessToken: string;
  userInfo: IUserProfile;
}
