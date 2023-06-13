import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./components/Layout";
import IndexPage from "./pages/IndexPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route
            path="/create"
            element={
              <ProtectedRoute user={user}>
                <CreatePost />
              </ProtectedRoute>
            }
          />
          <Route path="/post/:id" element={<PostPage />} />
          <Route
            path="/post/edit/:id"
            element={
              <ProtectedRoute user={user}>
                <EditPost />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
