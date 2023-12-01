import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {

  const [prodName, setProdName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const navigate = useNavigate();

  const addProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/ecommerce/products/add", {
        prodName,
        price,
        brand,
        color
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='container mt-5 w-50' style={{ height: '550px', background: 'linear-gradient(to right bottom , rgb(101 189 221), rgb(0 0 0)' }}>

      <div className="w-75 mx-auto text-center">
        <h1 className="mb-0 mt-5 mb-5 text-light">Add Your Product</h1>
      </div>

      <form onSubmit={addProduct}>
        <div className="row mb-5">
          <label className="col-sm-4 col-form-label fs-5 fw-medium">Product Name</label>
          <div className="col-sm-8">
            <input type="text" className="form-control border-dark" value={prodName} onChange={(e) => setProdName(e.target.value)} />
          </div>
        </div>

        <div className="row mb-5">
          <label className="col-sm-4 col-form-label fs-5 fw-medium">Product Price</label>
          <div className="col-sm-8">
            <input type="text" className="form-control border-dark" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
        </div>

        <div className="row mb-5">
          <label className="col-sm-4 col-form-label fs-5 fw-medium">Product Brand</label>
          <div className="col-sm-8">
            <input type="text" className="form-control border-dark" value={brand} onChange={(e) => setBrand(e.target.value)} />
          </div>
        </div>

        <div className="row mb-5">
          <label className="col-sm-4 col-form-label fs-5 fw-medium">Product Color</label>
          <div className="col-sm-8">
            <input type="text" className="form-control border-dark" value={color} onChange={(e) => setColor(e.target.value)} />
          </div>
        </div>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-outline-light btn-lg me-md-2" type="submit">ADD</button>
        </div>
      </form>

    </div>
  )
}

export default AddProduct