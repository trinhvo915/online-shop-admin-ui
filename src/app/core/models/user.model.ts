import { IDocument } from './document.model';
import { IOffice } from './office.model';

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
  office?: IOffice;
  profilePhoto?: IDocument;
}

export interface IUserInfo extends IBaseUser {
  activated: boolean;
  officeId?: string;
  officeName?: string;
}

export interface IUser {
  id?: string;
  login?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  title?: string;
  authorities?: string[];
  password?: string;
  officeId?: number;
}

export class User implements IUser {
  constructor(
    public id?: string,
    public login?: string,
    public email?: string,
    public firstName?: string,
    public lastName?: string,
    public title?: string,
    public authorities?: string[],
    public password?: string,
    public officeId?: number
  ) {}
}
