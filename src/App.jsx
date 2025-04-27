import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/navbar';
import Footer from './components/layouts/footer';
import ShopingSections from "./Pages/shopingSections";
import About from './Pages/about';
import Contacts from './Pages/contacts';
import SignUp from './Pages/signUp';

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
<Navbar onSearch={setSearchTerm} />
<Routes>
        <Route path="/" element={<ShopingSections searchTerm={searchTerm} />
} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

