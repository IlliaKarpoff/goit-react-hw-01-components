import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export default function FriendList({friends}) {
  return (
    <ul className={s.friendList}>
      {friends.map(friend =>
        <FriendListItem
        key={friend.id}
        name={friend.name}
        avatar={friend.avatar}
        isOnline={friend.isOnline}
        />
      )}
    </ul>
  )
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object)
  }

function FriendListItem ({avatar, name, isOnline}) {
  return (
  <li className={s.item}>
    <span className={isOnline ? s.online : s.offline}></span>
    <img className={s.avatar} src={avatar} alt={name} width="48" />
    <p className={s.name}>{name}</p>
  </li>
  )
}

FriendListItem.propTypes = {
  id: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
FriendListItem.defaultProps = {
  isOnline: true,
}