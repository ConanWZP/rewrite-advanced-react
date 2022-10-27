import {IUser} from "../../../models/IUser";
import {AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction} from "./types";
import axios from "axios";
import {AppDispatch} from "../../index";

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => {
        return {
            type: AuthActionEnum.SET_USER,
            payload: user
        }
    },
    setIsLoading: (loading: boolean): SetIsLoadingAction => {
        return {
            type: AuthActionEnum.SET_IS_LOADING,
            payload: loading
        }
    },
    setError: (error: string):SetErrorAction => {
        return {
            type: AuthActionEnum.SET_ERROR,
            payload: error
        }
    },
    setIsAuth: (auth: boolean): SetAuthAction => {
        return {
            type: AuthActionEnum.SET_AUTH,
            payload: auth
        }
    },
    login: (username:string, password: string) => {
        return async (dispatch: AppDispatch) => {
            try {
                dispatch(AuthActionCreators.setIsLoading(true))
                setTimeout(async () => {
                    const response = await axios.get<IUser[]>('./users.json')
                    const mockUser = response.data.find(user => user.username === username && user.password === password)
                    if (mockUser) {
                        localStorage.setItem('auth', 'true')
                        localStorage.setItem('username', mockUser.username)
                        dispatch(AuthActionCreators.setUser(mockUser))
                        dispatch(AuthActionCreators.setIsAuth(true))
                    } else {
                        dispatch(AuthActionCreators.setError('Неверный логин или пароль'))
                    }
                }, 1000)
            } catch (e) {
                dispatch(AuthActionCreators.setError('Произошла ошибка при логине'))
            }
        }
    },
    logout: () => {
        return async (dispatch: AppDispatch) => {
            localStorage.removeItem('auth')
            localStorage.removeItem('username')
            dispatch(AuthActionCreators.setUser({} as IUser))
            dispatch(AuthActionCreators.setIsAuth(false))
        }
    }
}