import {IUser} from "../../../models/IUser";

export interface AuthState {
    isAuth: boolean,
    isLoading: boolean,
    error: string,
    user: IUser
}

export enum AuthActionEnum {
    SET_AUTH = 'SET_AUTH',
    SET_ERROR = 'SET_ERROR',
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_USER = 'SET_USER'
}

export interface SetAuthAction {
    type: AuthActionEnum.SET_AUTH
    payload: boolean
}

export interface SetErrorAction {
    type: AuthActionEnum.SET_ERROR,
    payload: string
}

export interface SetIsLoadingAction {
    type: AuthActionEnum.SET_IS_LOADING,
    payload: boolean
}

export interface SetUserAction {
    type: AuthActionEnum.SET_USER,
    payload: IUser
}


export type AuthAction = SetAuthAction | SetErrorAction | SetIsLoadingAction | SetUserAction