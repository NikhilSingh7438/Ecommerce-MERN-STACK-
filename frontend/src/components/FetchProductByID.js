import React, { useState } from 'react'
import axios from 'axios';

const FetchProductByID = () => {

    const [productId, setProductId] = useState('');
  const [product, setProduct] = useState(null);

  const handleRetrieve = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/ecommerce/products/${productId}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  return (
    <div className='container mt-5 w-75' style={{ background: 'linear-gradient(to bottom right,  rgb(101 189 221), rgb(0 0 0)'}}>

        <div className="w-75 mb-4 mx-auto text-center">
            <h1 className="mb-0 text-light">Get Single Products</h1>
        </div>

        <div className='w-50 input-group input-group-lg mb-4  mx-auto'>
          <input type="text" className="form-control border-dark" placeholder="Product ID" value={productId}
          onChange={(e) => setProductId(e.target.value)}/>
        </div>

        <div className="d-grid col-3 mx-auto mb-5">
            <button className="btn btn-outline-light btn-lg" type="button" onClick={handleRetrieve}>Retrieve Product</button>
        </div>

        {product && (
        <table className="table table-bordered border-dark">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
                <th scope="col">Brand</th>
                <th scope="col">Color</th>
              </tr>
            </thead>
            <tbody className='table-group-divider'>
              <tr>
                <td>{product._id}</td>
                <td>{product.prodName}</td>
                <td>{product.price}</td>
                <td>{product.brand}</td>
                <td>{product.color}</td>
              </tr>
            </tbody>
        </table>
        )}
    </div>
  )
}

export default FetchProductByID