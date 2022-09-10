import { legacy_createStore } from "redux";
import { rootReducer } from "../reducers";

export const initialState = {
    avatar: 'https://www.gravatar.com/avatar/0?d=monsterid',
    name: "Monster",
    followers: 100,
    following: 300
}

export const store = legacy_createStore(rootReducer, initialState);