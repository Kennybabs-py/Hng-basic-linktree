// import {Routes, Route} from 'reac'

import "./App.css";
import LinkTree from "containers/LinkTree";
import Footer from "containers/Footer";
import { routes } from "routes";

function App() {
  return (
    <>
      {routes.map((item) => {
        return <div></div>;
      })}
      <Footer />
    </>
  );
}

export default App;
