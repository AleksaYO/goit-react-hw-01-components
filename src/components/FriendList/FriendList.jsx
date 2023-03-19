import cssFriends from './FriendList.module.css';
import PropTypes from 'prop-types';

export function FriendsList({ friends }) {
  return (
    <div className={cssFriends['friends-box']}>
      <ul className={cssFriends['friends-list']}>
        {friends.map(({ id, name, isOnline, avatar }) => {
          return (
            <FrinedsItem
              key={id}
              name={name}
              isOnline={isOnline}
              avatar={avatar}
            />
          );
        })}
      </ul>
    </div>
  );
}

function FrinedsItem({ name, isOnline, avatar }) {
  return (
    <li className={cssFriends.item}>
      <img
        className={cssFriends.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <span
        className={isOnline ? cssFriends.online : cssFriends.offline}
      ></span>
      <p className={cssFriends.name}>{name}</p>
    </li>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
