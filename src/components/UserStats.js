import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeFollowers, changeFollowing, setUsername } from '../actions/twitterActions';
import Avatar from './Avatar'

const UserStats = () => {
  const followers = useSelector((state) => state.followers)
  const following = useSelector((state) => state.following)
  const username = useSelector((state) => state.name)
  const dispatch = useDispatch();
  return (
    <div className='user-stats'>
      <div>
        <Avatar />
        <label
          onContextMenu={(e) => {
            e.preventDefault();
            const name = prompt('Enter Username');
            dispatch(setUsername(name))
          }}>
          {username}
        </label>

      </div>
      <div className='stats'>
        <div
          onClick={() => { dispatch(changeFollowers(1)) }}
          onContextMenu={(e) => {
            e.preventDefault();
            dispatch(changeFollowers(-1));
          }}>
          Followers: {followers}
        </div>
        <div
          onClick={() => { dispatch(changeFollowing(1)) }}
          onContextMenu={(e) => {
            e.preventDefault();
            dispatch(changeFollowing(-1));
          }}>
          Following: {following}</div>
      </div>
    </div>
  )
}

export default UserStats