import logo from "./logo.svg";
import "./App.css";
import { Component } from "./components/Component";
import ToggleColorMode from "./components/ThemedComponent";
import {
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import React from "react";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
// import { BlogPage } from "./pages/BlogPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Layout } from "./components/Layout";
import { PostPage } from "./pages/PostPage";
import { EditPostPage } from "./pages/EditPostPage";
import { CreatePostPage } from "./pages/CreatePostPage";
import { LoginPage } from "./pages/LoginPage";
import { RequireAuth } from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";

const LazyBlogPage = React.lazy(() => import("./pages/BlogPage"));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="about/*" element={<AboutPage />}>
        <Route path="contacts" element={<p>Contacts</p>} />
        <Route path="team" element={<p>Team</p>} />
      </Route>
      <Route
        path="posts"
        element={
          <React.Suspense fallback={<p>Loading...</p>}>
            <LazyBlogPage />
          </React.Suspense>
        }
      />
      <Route path="posts/:id" element={<PostPage />} />
      <Route
        path="posts/add"
        element={
          <RequireAuth>
            <CreatePostPage />
          </RequireAuth>
        }
      />
      <Route path="posts/:id/edit" element={<EditPostPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      {/* <ToggleColorMode />
      <Component /> */}
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
