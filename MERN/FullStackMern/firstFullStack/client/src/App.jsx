import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import DisplayUsers from "./components/DisplayUsers";
import CreateUser from "./components/CreateUser";
import User from "./components/User";
import Navbar from "./components/Navbar";
import MultiActionAreaCard from "./components/MultiActionAreaCard";
import DisplayProducts from "./components/DisplayProducts";
import CreateProduct from "./components/CreateProduct";
import DisplayOneProduct from "./components/DisplayOneProduct";
function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<DisplayUsers />} />
        <Route path="/users/new" element={<CreateUser />} />
        <Route path="/products/new" element={<CreateProduct />} />
        <Route path="/products" element={<DisplayProducts />} />
        <Route path="/products/:id" element={<DisplayOneProduct />} />

        <Route path="/users/:id" element={<User />} />

      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
