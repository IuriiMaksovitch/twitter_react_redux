import { CHANGE_FOLLOWERS, CHANGE_FOLLOWING, SET_AVATAR, SET_USERNAME } from "../actions/twitterActions";
import { initialState } from "../store/storeConfig";


export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERNAME:
            return { ...state, name: action.payload ?? state.name}
        case SET_AVATAR:
            return { ...state, avatar: action.payload ?? state.avatar}
        case CHANGE_FOLLOWERS:
            return { ...state, followers: state.followers + action.payload }
        case CHANGE_FOLLOWING:
            return { ...state, following: state.following + action.payload }
        default: return state;
    }
}