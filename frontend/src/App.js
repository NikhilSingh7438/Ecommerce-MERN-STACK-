import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserHome from "./components/UserHome";
import AddProduct from "./components/AddProduct";
import DeleteProduct from "./components/DeleteProduct";
import FetchProducts from "./components/FetchProducts";
import FetchProductByID from "./components/FetchProductByID";
 
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserHome />} />
          <Route path="add" element={<AddProduct />} />
          <Route path="delete" element={<DeleteProduct />} />
          <Route path="fetch/:id" element={<FetchProductByID />} />
          <Route path="fetch" element={<FetchProducts />} />
        </Routes>
    </BrowserRouter>
  );
}
 
export default App;