import React from "react";
import { useQueryClient } from "@tanstack/react-query";

const RefetchButton = () => {
  const queryClient = useQueryClient();

  const handleRefetch = () => {
    queryClient.invalidateQueries(["posts"]); // refetch posts
  };

  return (
    <button
      onClick={handleRefetch}
      style={{ marginBottom: "15px", padding: "10px 15px", cursor: "pointer" }}
    >
      Refetch Posts
    </button>
  );
};

export default RefetchButton;
