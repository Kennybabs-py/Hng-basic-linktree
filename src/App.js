import { Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "containers/Footer";
import { routes } from "routes";

function App() {
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
