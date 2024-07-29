import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import TopbarSidebar from "./components/TopbarSidebar";
import FsdCards from "./components/FsdCards";
import Datascience from "./pages/Datascience";
import Fsd from "./pages/Fsd";
import Cybersecurity from "./pages/Cybersecurity";
import Cloud from "./pages/Cloud";
import Blockchain from "./pages/Blockchain";

function App() {
  return (
    <Router>
      <div className='sb-nav-fixed'>
        <TopbarSidebar />
        <div id='layoutSidenav'>
          <div id='layoutSidenav_content'>
            <main>
              <div className='container-fluid px-4'>
                <Routes>
                  <Route path='/' element={<Fsd />} />
                  <Route path='/data-science' element={<Datascience />} />
                  <Route path='/cyber-security' element={<Cybersecurity />} />
                  <Route path='/cloud-computing' element={<Cloud />} />
                  <Route path='/blockchain' element={<Blockchain />} />
                </Routes>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
