import CartWidget from "./CartWidget";
import {Link} from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../CartContext";

const Navbar = () =>{
    const {cartList} =useContext(CartContext)
    let arrayCant = cartList.map(item => item.cantidad);
    let cantProductos = arrayCant.reduce((acc, valor)=> acc+ valor, 0)

    return(
      <nav className="navbar navbar-expand-md fixed-top">
          <div className="container-fluid">
              <h1 className="navbar-brand"><Link className="link" to="/">POSTERMANIA</Link></h1>
              <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">POSTERMANIA</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-center flex-grow-1">
                    <li className="nav-item">
                      <Link className="link" to="/category/cine y series">Cine y series</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="link" to="/category/deportes">Deportes</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="link" to="/category/musica">Música</Link>
                    </li>                                
                  </ul>
                  <Link to="/cart"><CartWidget cant={cantProductos}/></Link>
                </div>
              </div>
          </div>            
      </nav>
    )
}

export default Navbar;