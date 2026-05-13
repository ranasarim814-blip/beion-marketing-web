import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PortfolioDetail from "./pages/PortfolioDetail";
import AdminUpload from "./pages/AdminUpload";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
        <Route path="*" element={<Home />} />
        <Route path="/studio-admin" element={<AdminUpload />} />
      </Routes>
    </BrowserRouter>
  );
}
