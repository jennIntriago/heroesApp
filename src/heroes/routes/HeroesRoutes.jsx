import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { Dcpage, HeroPage, MarvelPage, SearchPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<Dcpage />} />

          <Route path="search" element={<SearchPage />} />
          {/* el /:id es para definir rutas hijas */}
          <Route path="hero/:id" element={<HeroPage />} />

          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
