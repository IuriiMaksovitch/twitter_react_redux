import { CHANGE_FOLLOWERS, CHANGE_FOLLOWING, SET_AVATAR, SET_USERNAME } from "../actions/twitterActions";
import { initialState } from "../store/storeConfig";


export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERNAME:
            return { ...state, name: action.payload ?? state.name }
        case SET_AVATAR:
            return { ...state, avatar: action.payload ?? state.avatar }
        case CHANGE_FOLLOWERS:
            const resFollowers = state.followers + action.payload;
            return { ...state, followers: resFollowers < 0 ? state.followers : resFollowers }
        case CHANGE_FOLLOWING:
            const resFollowing = state.following + action.payload;
            return { ...state, following: resFollowing < 0 ? state.following : resFollowing }
        default: return state;
    }
}