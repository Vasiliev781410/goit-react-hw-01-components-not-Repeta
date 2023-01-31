import PropTypes from 'prop-types';

const Profile = ({username,tag,location,avatar,stats,}) => (
    <div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt="User avatar"
      className="avatarPr"
      width="140"
      height="140"
    />
    <p className="namePr">{username}</p>
    <p className="tag">{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li className="statItem">
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li className="statItem">
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li className="statItem">
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
);

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,})
};

export default Profile;
  