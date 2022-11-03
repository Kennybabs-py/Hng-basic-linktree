import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./App.css";
import Footer from "containers/Footer";
import { routes } from "routes";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              key={route.id}
              path={route.path}
              element={<route.Component />}
            />
          );
        })}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
