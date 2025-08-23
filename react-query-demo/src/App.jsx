import React from "react";
import PostsComponent from "./components/PostsComponent";
import RefetchButton from "./components/RefetchButton";

const App = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Query Demo</h1>
      <RefetchButton />
      <PostsComponent />
    </div>
  );
};

export default App;
