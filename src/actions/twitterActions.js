export const SET_USERNAME = 'SET_USERNAME';
export const SET_AVATAR = 'SET_AVATAR';
export const CHANGE_FOLLOWERS = 'CHANGE_FOLLOWERS';
export const CHANGE_FOLLOWING = 'CHANGE_FOLLOWING';

export const setUsername = (username) => ({
    type: SET_USERNAME,
    payload: username
})

export const setAvatar = (avatar_url) => ({
    type: SET_AVATAR,
    payload: avatar_url
})

export const changeFollowers = (value) => ({
    type: CHANGE_FOLLOWERS,
    payload: value
})

export const changeFollowing = (value) => ({
    type: CHANGE_FOLLOWING,
    payload: value
})