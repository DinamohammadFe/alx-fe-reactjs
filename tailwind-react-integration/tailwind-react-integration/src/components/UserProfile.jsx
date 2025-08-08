import React from "react";
import PropTypes from "prop-types";

function UserProfile({ name, email, avatarUrl }) {
  return (
    <div>
      <img src={avatarUrl} alt="User avatar" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

export default UserProfile;
