const Header = () => {

  return (<>

          {/* header */}

    <header>
      
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="img/FooterLogo.png" className="img-fluid navbar-logo" alt="logo"/>  
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">

                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Home</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Custom Jeans</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Men</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Women</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Measurement</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Order Samples</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Blog</a>
                </li>

              </ul>
              {/* <div className="h-logo">
                <img src="img/search.png"></img>
              </div> */}
            </div>
            </div>
        </nav>
      
    </header>

          {/* header */}

  </>);
};
export default Header;