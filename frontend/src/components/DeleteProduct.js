import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const DeleteProduct = () => {

  const [productId, setProductId] = useState('');
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/ecommerce/products/${productId}`);
      navigate("/");
      console.log(`Product with ID ${productId} deleted successfully.`);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className='container w-50' style={{height: '300px', marginTop: '150px', background: 'linear-gradient(to bottom right, rgb(101 189 221), rgb(0 0 0)'}}>
        <div className="w-75 mx-auto text-center">
            <h1 className="mb-0 text-warning">Product you want to delete</h1>
            <h1 className="mb-0 ">Enter Product Id</h1>
        </div>

        <div className='w-75 input-group input-group-lg  mx-auto mt-5'>
            <input type="text" className="form-control border-dark" placeholder="Product ID" value={productId}
          onChange={(e) => setProductId(e.target.value)}/>
        </div>

        <div className="d-grid mt-5 col-5 mx-auto">
            <button className="btn btn-outline-light btn-lg mb-5" type="button" onClick={handleDelete}>Delete Product</button>
        </div>

    </div>
  )
}

export default DeleteProduct