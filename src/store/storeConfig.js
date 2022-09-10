import { legacy_createStore } from "redux";
import { rootReducer } from "../reducers";

export const initialState = {
    avatar: 'https://www.gravatar.com/avatar/0?d=monsterid',
    name: "Monster",
    followers: 4,
    following: 3
}

export const store = legacy_createStore(rootReducer, initialState);