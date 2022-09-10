import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setAvatar } from '../actions/twitterActions';

const Avatar = ({ size }) => {
    const username = useSelector((state) => state.name);
    const avatar = useSelector((state) => state.avatar);
    const dispatch = useDispatch();
    return (
        <img
            className={`user-avatar ${size ?? ''}`}
            src={avatar}
            alt={username}
            onClick={() => {
                const url = prompt('Enter url avatar');
                dispatch(setAvatar(url));
            }}
            
        />
    )
}

export default Avatar