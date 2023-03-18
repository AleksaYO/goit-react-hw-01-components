import './Profile.css';
import PropTypes from 'prop-types';

export function Profile({ username, tag, location, stats, avatar }) {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" width="150" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className="stats-item first">
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className="stats-item">
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className="stats-item last">
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }),
};
