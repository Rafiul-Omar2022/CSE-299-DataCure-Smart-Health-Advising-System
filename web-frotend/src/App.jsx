import { NavbarWithMegaMenu } from "./Pages/Components/NavBar";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

import { Routes, Route, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <NavbarWithMegaMenu />
        </header>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
