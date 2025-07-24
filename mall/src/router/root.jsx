import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../page/Loading";

// Root 페이지
const MainPage = lazy(() => import("../page/MainPage"));
const AboutPage = lazy(() => import("../page/AboutPage"));

// Todo 페이지
const ListPage = lazy(() => import("../page/todo/ListPage"));
const AddPage = lazy(() => import("../page/todo/AddPage"));
const ReadPage = lazy(() => import("../page/todo/ReadPage"));
const ModifyPage = lazy(() => import("../page/todo/ModifyPage"));

// Product 페이지
const ProductListPage = lazy(() => import("../page/product/ListPage"));
const ProductAddPage = lazy(() => import("../page/product/AddPage"));
const ProductReadPage = lazy(() => import("../page/product/ReadPage"));
const ProductModifyPage = lazy(() => import("../page/product/ModifyPage"));

// Login 페이지
const LoginPage = lazy(() => import("../page/member/LoginPage"));
const LogoutPage = lazy(() => import("../page/member/LogoutPage"));

const root = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <MainPage />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<Loading />}>
        <AboutPage />
      </Suspense>
    ),
  },
  // todo 경로
  {
    path: "/todo/list",
    element: (
      <Suspense fallback={<Loading />}>
        <ListPage />
      </Suspense>
    ),
  },
  {
    path: "/todo/add",
    element: (
      <Suspense fallback={<Loading />}>
        <AddPage />
      </Suspense>
    ),
  },
  {
    path: "/todo/read/:tno",
    element: (
      <Suspense fallback={<Loading />}>
        <ReadPage />
      </Suspense>
    ),
  },
  {
    path: "/todo/modify/:tno",
    element: (
      <Suspense fallback={<Loading />}>
        <ModifyPage />
      </Suspense>
    ),
  },
  // product 경로
  {
    path: "/product/list",
    element: (
      <Suspense fallback={<Loading />}>
        <ProductListPage />
      </Suspense>
    ),
  },
  {
    path: "/product/add",
    element: (
      <Suspense fallback={<Loading />}>
        <ProductAddPage />
      </Suspense>
    ),
  },
  {
    path: "/product/read/:pno",
    element: (
      <Suspense fallback={<Loading />}>
        <ProductReadPage />
      </Suspense>
    ),
  },
  {
    path: "/product/modify/:pno",
    element: (
      <Suspense fallback={<Loading />}>
        <ProductModifyPage />
      </Suspense>
    ),
  },
  {
    path: "/member/login",
    element: (
      <Suspense fallback={<Loading />}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: "/member/logout",
    element: (
      <Suspense fallback={<Loading />}>
        <LogoutPage />
      </Suspense>
    ),
  },
]);

export default root;
