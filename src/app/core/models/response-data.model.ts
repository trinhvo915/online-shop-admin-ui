import { EHttpStatusCode } from '../enums/http-status=code.enum';

export interface IResponseData<T> {
  isSuccess: boolean;
  data?: T;
  errors: IErrorResponseData[];
  message: string;
  status: EHttpStatusCode;
}
export interface IPaginator<T> {
  content: T;
  currentPage: number;
  first: boolean;
  last: boolean;
  totalElements: number;
  totalPages: number;
}
export interface IErrorResponseData {
  propertyName: string;
  errorMessage: string;
}
export interface IData<T> {
  last: boolean;
  totalPages: number;
  currentPage: number;
  content: T;
  first: boolean;
  totalElements: number;
  size: number;
  numberOfElements: number;
}
