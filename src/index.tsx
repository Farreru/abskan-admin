import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import theme from "./flowbite-theme";
import { Flowbite } from "flowbite-react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import DashboardPage from "./pages";
import SignInPage from "./pages/authentication/sign-in";
import SignUpPage from "./pages/authentication/sign-up";
import EcommerceProductsPage from "./pages/e-commerce/products";
import UserListPage from "./pages/users/list";
import GuruPage from "./pages/master-data/guru";
import JurusanPage from "./pages/master-data/jurusan";
import PenggunaPage from "./pages/master-data/pengguna";
import SiswaPage from "./pages/master-data/siswa";

const container = document.getElementById("root");

if (!container) {
  throw new Error("React root element doesn't exist!");
}

const root = createRoot(container);

const isDark = localStorage.getItem("theme") === "dark" ? true : false;

root.render(
  <StrictMode>
    <Flowbite theme={{ theme, dark: isDark }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} index />
          <Route path="/authentication/sign-in" element={<SignInPage />} />
          <Route path="/authentication/sign-up" element={<SignUpPage />} />
          <Route
            path="/e-commerce/products"
            element={<EcommerceProductsPage />}
          />
          <Route path="/users/list" element={<UserListPage />} />
          <Route path="/master-data/guru" element={<GuruPage />} />
          <Route path="/master-data/jurusan" element={<JurusanPage />} />
          <Route path="/master-data/pengguna" element={<PenggunaPage />} />
          <Route path="/master-data/siswa" element={<SiswaPage />} />
        </Routes>
      </BrowserRouter>
    </Flowbite>
  </StrictMode>
);
