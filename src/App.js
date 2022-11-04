import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register/register";

function App() {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </>
  );
}

export default App;
