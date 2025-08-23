import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

export default function Profile() {
  return (
    <div>
      <h2>👤 Profile Page</h2>
      <nav>
        <Link to="details" style={{ margin: "0 10px" }}>
          Details
        </Link>
        <Link to="settings" style={{ margin: "0 10px" }}>
          Settings
        </Link>
      </nav>

      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}
