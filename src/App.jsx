import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css'

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import SpeciesDetail from "./pages/SpeciesDetail";

function App() {


  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/lagartos"
            element={<CategoryPage categoria="lagartos" />}
          />

          <Route
            path="/serpientes"
            element={<CategoryPage categoria="serpientes" />}
          />

          <Route
            path="/quelonios"
            element={<CategoryPage categoria="quelonios" />}
          />

          <Route
            path="/geckos-camaleones"
            element={<CategoryPage categoria="geckos-camaleones" />}
          />

          <Route
            path="/especie/:id"
            element={<SpeciesDetail />}
          />

        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App;
