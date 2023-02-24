import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const navbar = () => {
  return (
    <>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Pulp Rental</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Cámaras y lentes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Iluminación</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Trípodes y grip</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sonido </a>
              </li>
              <li className="CartWidget"> <CartWidget />
              <p> 10 </p> 
              </li>
            </ul>
          </div>
        </div>
      </nav> 
      
    </>
  )
}

export default navbar