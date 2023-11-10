import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import ProductPage from "@features/productPage/ProductPage";
import ContactPage from "@features/contact/ContactPage";
import ArticlesPage from "@features/articles/ArticlesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // authenticated routes
      // {
      //   element: <RequireAuth />,
      //   children: [{ path: "checkout", element: <CheckoutWrapper /> }],
      // },
      // // admin routes
      // {
      //   element: <RequireAuth roles={["Admin"]} />,
      //   children: [
      //     {
      //       path: "admin-dashboard",
      //       element: <AdminDashboard />,
      //     },
      //     { path: "test", element: <TestPage /> },
      //   ],
      // },
      // { path: "catalog", element: <Catalog /> },
      { path: "product/:id", element: <ProductPage /> },
      // { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      // { path: "server-error", element: <ServerError /> },
      // { path: "not-found", element: <NotFound /> },
      // { path: "basket", element: <BasketPage /> },
      // { path: "login", element: <Login /> },
      // { path: "register", element: <Register /> },
      // { path: "blog", element: <BlogPage /> },
      // { path: "blog/:id", element: <BlogPostDetails /> },
      // { path: "gallery", element: <GalleryPage /> },
      { path: "articles", element: <ArticlesPage /> },
      // { path: "requests", element: <RequestsPage /> },
      // { path: "Representatives", element: <RepresentativesPage /> },
      // { path: "profile", element: <>profile</> },
      // { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
]);
