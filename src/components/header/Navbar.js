import CartWidget from "./CartWidget";

const Navbar = () =>{
    return(
        <header>
          <nav className="navbar navbar-expand-md fixed-top">
            <div className="container-fluid">
                <h1 className="navbar-brand" href="#">POSTERMANIA</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">POSTERMANIA</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-center flex-grow-1">
                      <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Productos</a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Categorías
                        </a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Películas</a></li>
                          <li><a className="dropdown-item" href="#">Series</a></li>                          
                          <li><a className="dropdown-item" href="#">Comics</a></li>
                          <li><a className="dropdown-item" href="#">Juegos</a></li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Contacto</a>
                      </li>                                
                    </ul>
                    <CartWidget cant={7}/>
                  </div>
                </div>
            </div>            
        </nav>
        </header>
    )
}

export default Navbar;