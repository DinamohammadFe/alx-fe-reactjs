import React from "react";

function UserProfile({ name, email, avatar }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-w-sm mx-auto mt-10">
      <img
        className="w-24 h-24 rounded-full mx-auto"
        src={avatar}
        alt={`${name}'s avatar`}
      />
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{email}</p>
      </div>
    </div>
  );
}

export default UserProfile;
