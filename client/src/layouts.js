import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function Header(){
    return(
    <>
    {/* <!-- NAVBAR --> */}
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    {/* <!-- Container wrapper --> */}
    <div class="container-fluid">
        {/* <!-- Navbar brand --> */}
        <a href="/" class="navbar-brand"> <i class="fas fa-paw"></i>Fetch</a>
        

        {/* <!-- Icons --> */}
        <ul class="navbar-nav d-flex flex-row me-1">
            <li class="nav-item me-3 me-lg-0">
                <a class="nav-link text-white" href="/"><i class="fas fa-cog mx-1"></i> Settings</a>
            </li>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                <a id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false"> <i class="fas fa-user mx-1"></i> Profile </a>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/">Log in</Dropdown.Item>
                    <Dropdown.Item href="/">Sign up</Dropdown.Item>
                    <Dropdown.Item href="/">Log out</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
        </ul>
    </div>

  </nav>
  {/* <!--END OF NAVBAR--> */}
    </>);
    
}

export default Header;