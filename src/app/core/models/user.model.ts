export interface IBaseUser {
  id: string;
  login: string;
  email: string;
  firstName: string;
  lastName: string;
  title?: string;
  authorities: string[];
  shortName: string;
  isDefaultAvatar?: boolean;
}

export interface IUserProfile extends IBaseUser {
}