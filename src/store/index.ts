import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import {authReduce} from "./reducers/auth";
import {EventReducer} from "./reducers/event";

const rootReducers = combineReducers({
    auth: authReduce,
    events: EventReducer
})

export const store = createStore(rootReducers, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch