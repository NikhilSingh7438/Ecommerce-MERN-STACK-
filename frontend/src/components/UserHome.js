import React from 'react'
import { Link } from 'react-router-dom'

const UserHome = () => {
  return (
    <div className='container mt-5 w-50' style={{height: '500px', background: 'linear-gradient(to bottom right, #dc3545, #212529)'}}>

        <div className="w-75 mx-auto text-center">
            <h1 className="mb-0 text-warning">Welcome to ProductZone</h1>
        </div>

        <h3 className='mt-5 mb-5'>Welcome Admin !!</h3>

        <div className="d-grid gap-2 col-6 mx-auto">
          <Link to='/add' className="btn btn-outline-light btn-lg mb-5 border-warning">
            Add New Product
          </Link>
          <Link to='/delete' className="btn btn-outline-light btn-lg mb-5 border-warning">
            Delete Product
          </Link>
          <Link to='/fetch/:id' className="btn btn-outline-light btn-lg border-warning">
            Fetch Products
          </Link>
        </div>
    </div>
  )
}

export default UserHome