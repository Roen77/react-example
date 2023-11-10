import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductsQueryPage from "./pages/ProductsQueryPage";
import ProductsSagaPage from "./pages/ProductsSagaPage";
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
