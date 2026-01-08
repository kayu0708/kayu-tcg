import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { PriceList } from "../pages/PriceList/PriceList";
import { NotFound } from "../pages/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<PriceList />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
