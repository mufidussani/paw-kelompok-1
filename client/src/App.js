import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Navbar from "./components/Navbar";
import MahasiswaList from "./components/MahasiswaList";
import EditMahasiswa from "./components/EditMahasiswa";
import AddMahasiswa from "./components/AddMahasiswa";
import Footer from "./components/Footer";
import NoMatchPage from "./components/NoMatchPage";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Routes>
        <Route path="*" element={<NoMatchPage />} />
        <Route path="/" element={<MahasiswaList />} />
        <Route path="/update/:id" element={<EditMahasiswa />} />
        <Route path="/add" element={<AddMahasiswa />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;