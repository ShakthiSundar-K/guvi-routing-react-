import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate } from "react-router-dom";

function TopbarSidebar() {
  const navigate = useNavigate();
  useEffect(() => {
    // Handle sidebar toggle
    const sidebarToggle = document.querySelector("#sidebarToggle");

    const handleSidebarToggle = (event) => {
      event.preventDefault();
      document.body.classList.toggle("sb-sidenav-toggled");
      localStorage.setItem(
        "sb|sidebar-toggle",
        document.body.classList.contains("sb-sidenav-toggled")
      );
    };

    if (sidebarToggle) {
      sidebarToggle.addEventListener("click", handleSidebarToggle);
      return () => {
        sidebarToggle.removeEventListener("click", handleSidebarToggle);
      };
    }
  }, []);

  return (
    <>
      <nav className='sb-topnav navbar navbar-expand navbar-dark bg-dark'>
        {/* Navbar Brand */}
        <a className='navbar-brand ps-3' onClick={() => navigate("/")}>
          Start Bootstrap
        </a>
        {/* Sidebar Toggle */}
        <button
          className='btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0'
          id='sidebarToggle'
          href='#!'
        >
          <i className='fas fa-bars'></i>
        </button>
        {/* Navbar Search */}
        <form className='d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0'>
          <div className='input-group'>
            <input
              className='form-control'
              type='text'
              placeholder='Search for...'
              aria-label='Search for...'
              aria-describedby='btnNavbarSearch'
            />
            <button
              className='btn btn-primary'
              id='btnNavbarSearch'
              type='button'
            >
              <i className='fas fa-search'></i>
            </button>
          </div>
        </form>
        {/* Navbar */}
        <ul className='navbar-nav ms-auto ms-md-0 me-3 me-lg-4'>
          <li className='nav-item dropdown'>
            <a
              className='nav-link dropdown-toggle'
              id='navbarDropdown'
              href='#'
              role='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              <i className='fas fa-user fa-fw'></i>
            </a>
            <ul
              className='dropdown-menu dropdown-menu-end'
              aria-labelledby='navbarDropdown'
            >
              <li>
                <a className='dropdown-item' href='#!'>
                  Settings
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#!'>
                  Activity Log
                </a>
              </li>
              <li>
                <hr className='dropdown-divider' />
              </li>
              <li>
                <a className='dropdown-item' href='#!'>
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div id='layoutSidenav'>
        <div id='layoutSidenav_nav'>
          <nav
            className='sb-sidenav accordion sb-sidenav-dark'
            id='sidenavAccordion'
          >
            <div className='sb-sidenav-menu'>
              <div className='nav'>
                <div className='sb-sidenav-menu-heading'>Articles</div>
                <a
                  className='nav-link d-flex justify-content-between align-items-center'
                  onClick={() => navigate("/")}
                >
                  MERN FSD
                  <div className='sb-nav-link-icon'>
                    <i className='fa-solid fa-angle-right'></i>
                  </div>
                </a>
                <a
                  className='nav-link d-flex justify-content-between align-items-center'
                  onClick={() => navigate("/blockchain")}
                >
                  Block Chain
                  <div className='sb-nav-link-icon'>
                    <i className='fa-solid fa-angle-right'></i>
                  </div>
                </a>
                <a
                  className='nav-link d-flex justify-content-between align-items-center'
                  onClick={() => navigate("/cyber-security")}
                >
                  Cyber Security
                  <div className='sb-nav-link-icon'>
                    <i className='fa-solid fa-angle-right'></i>
                  </div>
                </a>
                <a
                  className='nav-link d-flex justify-content-between align-items-center'
                  onClick={() => navigate("/cloud-computing")}
                >
                  Cloud Computing
                  <div className='sb-nav-link-icon'>
                    <i className='fa-solid fa-angle-right'></i>
                  </div>
                </a>
                <a
                  className='nav-link d-flex justify-content-between align-items-center'
                  onClick={() => navigate("/data-science")}
                >
                  Data Science
                  <div className='sb-nav-link-icon'>
                    <i className='fa-solid fa-angle-right'></i>
                  </div>
                </a>
              </div>
            </div>
            <div className='sb-sidenav-footer'>
              <div className='small'>Logged in as:</div>
              Start Bootstrap
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default TopbarSidebar;
