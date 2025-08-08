import React from "react";

function UserProfile({ name, email, avatarUrl }) {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={avatarUrl}
        alt={`${name}'s avatar`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">{email}</p>
      </div>
    </div>
  );
}

export default UserProfile;
