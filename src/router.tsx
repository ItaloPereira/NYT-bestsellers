import { BrowserRouter, Routes, Route } from "react-router-dom";

import RootLayout from '@/layouts/RootLayout';

import HomePage from '@/pages/HomePage';
import ListPage from '@/pages/ListPage';

const Router = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path=":listName" element={<ListPage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;