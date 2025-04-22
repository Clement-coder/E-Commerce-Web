import { Routes, Route } from 'react-router-dom';
import ShopingSections from "./Pages/shopingSections";
import Navbar from './components/layouts/navbar';

export default function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<ShopingSections />} />
      </Routes>
    </>
  );
}
