import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import jwt from 'jwt-decode'

import Navbar from "./pages/Navbar/Navbar";
import Header from "./pages/Header/Header";

import Payment from "./pages/Payment";
import ReturnPage from "./pages/ReturnPage";
import CreateUser from "./pages/CreateUser.jsx";
import NoPage from "./pages/NoPage";
import CreateMed from "./pages/CreateMed";
import StoreStock from "./pages/StoreStock"
import HigherOff from "./pages/HigherOff"
import MainStore from "./pages/MainStore";
import GRN from "./pages/GRN";
import BillDetails from "./pages/BillDetails";

import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Role from './pages/Role'
import Main from './pages/Main'
import UnRole from "./pages/UnRole";


export default function App() {

  const token = localStorage.getItem("token")
  var user
  if(token) {
    user = jwt(token)
    console.log(user)

    console.log(user ? "true" : "false")
  }

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
          <Route path="/" element={<Header />} />
          {/* <Route path='/store-stock' element={<StoreStock />} /> */}
          {/* <Route path='/bill-details' element={<BillDetails />} /> */}
          {/* <Route path='/higherOfficial' element={<HigherOff />} /> */}
          {/* <Route path='/OpPharmacyBilling' element={<Payment />} /> */}
          {/* <Route path='/return' element={<ReturnPage />} /> */}
          {/* <Route path='/main_store' element={<MainStore />} /> */}
          {/* <Route path='/grn' element={<GRN />} /> */}
          {/* <Route path='/OpPharmacyBilling' element={<OpPharmacyBilling />} /> */}

          {/* <Route path="payment" element={<Payment />} /> */}
          {/* <Route path="createuser" element={<CreateUser />} /> */}
          {/* <Route path="medicine" element={<CreateMed />} /> */}

          {/* {
          user ?
          user.user.role === "senior" ? 
          <Route path='/store-stock' element={<StoreStock />} /> : 
          <Route path='/store-stock' exact element={<Navigate replace to="/main" />} /> : 
          <Route path='/store-stock' exact element={<Navigate replace to="/login" />} />
          } */}

{
          user ?
          user.user.role === "salesman" ? 
          <Route path='/store-stock' element={<StoreStock />} /> : 
          <Route path='/store-stock' exact element={<Navigate replace to="/main" />} /> : 
          <Route path='/store-stock' exact element={<Navigate replace to="/login" />} />
          }

{
          user ?
          user.user.role === "salesman" ? 
          <Route path='/bill-details' element={<BillDetails />} /> : 
          <Route path='/bill-details' exact element={<Navigate replace to="/main" />} /> : 
          <Route path='/bill-details' exact element={<Navigate replace to="/login" />} />
          }

          {
          user ?
          user.user.role === "admin" ? 
          <Route path='/higherOfficial' element={<HigherOff />} /> : 
          <Route path='/higherOfficial' exact element={<Navigate replace to="/main" />} /> : 
          <Route path='/higherOfficial' exact element={<Navigate replace to="/login" />} />
          }

{
          user ?
          user.user.role === "salesman" ? 
          <Route path='/OpPharmacyBilling' element={<Payment />} /> : 
          <Route path='/OpPharmacyBilling' exact element={<Navigate replace to="/main" />} /> : 
          <Route path='/OpPharmacyBilling' exact element={<Navigate replace to="/login" />} />
          }

{
          user ?
          user.user.role === "salesman" ? 
          <Route path='/return' element={<ReturnPage />} /> : 
          <Route path='/return' exact element={<Navigate replace to="/main" />} /> : 
          <Route path='/return' exact element={<Navigate replace to="/login" />} />
          }

          {
          user ?
          user.user.role === "store" ? 
          <Route path='/main_store' element={<MainStore />} /> : 
          <Route path='/main_store' exact element={<Navigate replace to="/main" />} /> : 
          <Route path='/main_store' exact element={<Navigate replace to="/login" />} />
          }

          {
          user ?
          user.user.role === "senior" ? 
          <Route path='/grn' element={<GRN />} /> : 
          <Route path='/grn' exact element={<Navigate replace to="/main" />} /> : 
          <Route path='/grn' exact element={<Navigate replace to="/login" />} />
          }

          {
          user ?
          user.user.role === "senior" ? 
          <Route path="/medicine" element={<CreateMed />} /> : 
          <Route path='/medicine' exact element={<Navigate replace to="/main" />} /> : 
          <Route path='/medicine' exact element={<Navigate replace to="/login" />} />
          }

          {
          user ?
          user.user.role === "senior" ? 
          <Route path="/createuser" element={<CreateUser />} /> : 
          <Route path='/createuser' exact element={<Navigate replace to="/main" />} /> : 
          <Route path='/createuser' exact element={<Navigate replace to="/login" />} />
          }


        { user && <Route path='/main' exact element={<Main />} /> }

          {user ? 
            <Route path='/signup' exact element={<Navigate replace to="/main" />} /> : 
            <Route path='/signup' exact element={<SignUp />} /> 
          }

          {user ? 
            <Route path='/login' exact element={<Navigate replace to="/main" />} /> : 
            <Route path='/login' exact element={<Login />} />
          }

        {/* <Route path='/login' exact element={<Login />} /> */}
        {/* { user && (user.user.role == "salesman" || user.role == "admin") && <Route path='/salesman' exact element={<Salesman />} />}
        { user && user.user.role == "senior" && <Route path='/senior' exact element={<Senior />} />}
        { user && user.user.role == "admin" && <Route path='/admin' exact element={<Admin />} />} */}
        
        {/* {
          user ?
          user.user.role == "admin" ? 
          <Route path='/admin' exact element={<Admin />} /> : 
          <Route path='/admin' exact element={<Navigate replace to="/main" />} /> : 
          <Route path='/admin' exact element={<Navigate replace to="/login" />} />
        } */}

        {/* {
          user ?
          user.user.role == "senior" ? 
          <Route path='/senior' exact element={<Senior />} /> : 
          <Route path='/senior' exact element={<Navigate replace to="/" />} /> : 
          <Route path='/senior' exact element={<Navigate replace to="/login" />} />
        } */}

        {/* {
          user ?
          (user.user.role == "salesman" || user.user.role == "admin") ? 
          <Route path='/salesman' exact element={<Salesman />} /> : 
          <Route path='/salesman' exact element={<Navigate replace to="/" />} /> : 
          <Route path='/salesman' exact element={<Navigate replace to="/login" />} />
        } */}

        {
          user ?
          user.user.role == "admin" ? 
          <Route path='/role' exact element={<Role />} /> : 
          <Route path='/role' exact element={<Navigate replace to="/main" />} /> : 
          <Route path='/role' exact element={<Navigate replace to="/login" />} />
        }

{
          user ?
          user.user.role == "admin" ? 
          <Route path='/unrole' exact element={<UnRole />} /> : 
          <Route path='/unrole' exact element={<Navigate replace to="/main" />} /> : 
          <Route path='/unrole' exact element={<Navigate replace to="/login" />} />
        }
        
        {/* <Route path='/role' exact element={<Role />} /> */}


        <Route path='/main' exact element={<Navigate replace to="/login" />} />




          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}