import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import ProductPage from "@features/productPage/ProductPage";
import ContactPage from "@features/contact/ContactPage";
import ArticlesPage from "@features/articles/ArticlesPage";
import AboutPage from "@features/about/AboutPage";
import RefundPolicy from "@features/refundPolicy/RefundPolicy";
import DnaPage from "@features/dna/DnaPage";
import TermOfService from "@features/termOfService/TermOfService";
import PrivacyPolicyPage from "@features/privacyPolicy/PrivacyPolicyPage";

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
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      // { path: "server-error", element: <ServerError /> },
      // { path: "not-found", element: <NotFound /> },
      // { path: "basket", element: <BasketPage /> },
      // { path: "login", element: <Login /> },
      // { path: "register", element: <Register /> },
      { path: "terms-of-service", element: <TermOfService /> },
      // { path: "blog/:id", element: <BlogPostDetails /> },
      { path: "dna", element: <DnaPage /> },
      { path: "articles", element: <ArticlesPage /> },
      { path: "refund-policy", element: <RefundPolicy /> },
      { path: "privacy-policy", element: <PrivacyPolicyPage /> },
      // { path: "profile", element: <>profile</> },
      // { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
]);
