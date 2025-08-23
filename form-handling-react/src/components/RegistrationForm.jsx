import React, { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md">
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}           {/* ✅ controlled */}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}              {/* ✅ controlled */}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}           {/* ✅ controlled */}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 mt-2 rounded">
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
