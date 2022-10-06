import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";
import { Navbar } from "../ui";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="login" element={<LoginPage />} />

        <Route path="login" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};
