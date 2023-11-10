import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsQueryPage from "./pages/ProductsQueryPage";
import ProductsSagaPage from "./pages/ProductsSagaPage";
import MainPage from "./pages/MainPage";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/query" element={<ProductsQueryPage />} />
        <Route path="/saga" element={<ProductsSagaPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
