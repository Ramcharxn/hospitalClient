import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import CreateUser from "./pages/CreateUser.jsx";
import NoPage from "./pages/NoPage";
import CreateMed from "./pages/CreateMed";
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="payment" element={<Payment />} />
          <Route path="createuser" element={<CreateUser />} />
          <Route path="medicine" element={<CreateMed />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}


