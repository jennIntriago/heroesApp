import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { Dcpage, MarvelPage } from "../heroes";
import { Navbar } from "../ui";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<Dcpage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  );
};
