import { Navbar } from "../../ui";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<Dcpage />} />
        {/* Search y Hero by id */}
        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  );
};
