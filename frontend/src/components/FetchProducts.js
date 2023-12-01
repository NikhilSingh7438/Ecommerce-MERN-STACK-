import React, { useEffect, useState } from 'react'
import axios from 'axios';

const FetchProducts = () => {

  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    getProduct();
  }, []);
 
  const getProduct = async () => {
    const response = await axios.get("http://localhost:5000/ecommerce/products");
    setProducts(response.data);
  };

  return (
    <div className='container mt-5 w-75' style={{ background: 'linear-gradient(to bottom right,  rgb(101 189 221), rgb(0 0 0)'}}>

      <div className="w-75 mb-5 mx-auto text-center">
          <h1 className="mb-0 text-warning">Your All Products</h1>
      </div> 

      <table className="table table-bordered border-dark mb-5">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Brand</th>
              <th scope="col">Color</th>
            </tr>
          </thead>
          <tbody className='table-group-divider'>
            {products.map((product, index) => (

            <tr>
              <th scope="row">{index + 1}</th>
              <td>{product.prodName}</td>
              <td>{product.price}</td>
              <td>{product.brand}</td>
              <td>{product.color}</td>
            </tr>
            ))}
          </tbody>
      </table>

    </div>
  )
}

export default FetchProducts