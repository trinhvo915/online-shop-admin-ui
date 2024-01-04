import { E_HttpStatusCode } from "../enums/http-status-code";

export interface IResponseData<T> {
    isSuccess: boolean,
    data?: T,
    errors: IErrorResponseData[];
    message: string,
    status: E_HttpStatusCode
}
export interface IPaginator<T> {
    content: T,
    currentPage: number,
    first: boolean,
    last: boolean,
    totalElements: number,
    totalPages: number
}
export interface IErrorResponseData {
    propertyName: string,
    errorMessage: string
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
