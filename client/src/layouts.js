import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function logout(){
    localStorage.removeItem("user");
}

function Header(){
    return(
    <>
    {/* <!-- NAVBAR --> */}
  <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
    {/* <!-- Container wrapper --> */}
    <div className="container-fluid">
        {/* <!-- Navbar brand --> */}
        <a href="/" className="navbar-brand"> <i className="fas fa-paw"></i>Fetch</a>
        

        {/* <!-- Icons --> */}
        <ul className="navbar-nav d-flex flex-row me-1">
            <li className="nav-item me-3 me-lg-0">
                <a className="nav-link text-white" href="/"><i className="fas fa-cog mx-1"></i> Settings</a>
            </li>
            <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                <a id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false"> <i className="fas fa-user mx-1"></i> Profile </a>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/log_in">Log in</Dropdown.Item>
                    <Dropdown.Item href="/verify_email">Sign up</Dropdown.Item>
                    <Dropdown.Item href="/log_out" onClick={logout}>Log out</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
        </ul>
    </div>

  </nav>
  {/* <!--END OF NAVBAR--> */}
    </>);
    
}

export default Header;