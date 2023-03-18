import friends from '../data/friends.json';
import cssFriends from './FriendList.module.css';

export function FriendsList() {
  return (
    <div className={cssFriends['friends-box']}>
      <ul className={cssFriends['friends-list']}>
        <FrinedsItem />
      </ul>
    </div>
  );
}

function FrinedsItem() {
  return friends.map(({ name, id, isOnline, avatar }) => {
    return (
      <li key={id} className={cssFriends.item}>
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
  });
}
