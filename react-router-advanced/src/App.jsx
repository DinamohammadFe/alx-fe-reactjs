// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./components/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import PostsComponent from "./components/PostsComponent";
import BlogPost from "./components/BlogPost";
import Profile from "./components/Profile"; // ✅ Import Profile

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public route */}
            <Route path="/" element={<h1>Welcome to the App 🚀</h1>} />

            {/* Protected routes */}
            <Route
              path="/posts"
              element={
                <ProtectedRoute>
                  <PostsComponent />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile /> {/* ✅ Protected Profile Route */}
                </ProtectedRoute>
              }
            />

            {/* Dynamic route for blog post */}
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
