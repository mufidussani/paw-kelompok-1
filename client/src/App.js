import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Navbar from "./components/Navbar";
import MahasiswaList from "./components/MahasiswaList";
import EditMahasiswa from "./components/EditMahasiswa";
import AddMahasiswa from "./components/AddMahasiswa";

function App() {
  return (
    <Router>
    <Navbar />
    <br />
    <Routes>
      <Route path="/" element={<MahasiswaList />} />
      <Route path="/update/:id" element={<EditMahasiswa />} />
      <Route path="/add" element={<AddMahasiswa />} />
    </Routes>
    </Router>
    //</div>
  );
}

export default App;