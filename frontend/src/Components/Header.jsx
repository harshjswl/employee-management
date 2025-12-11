import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <Link className="navbar-brand fw-bold" to="/">EmployeeManager</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Show Employees</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/addemployee">Add Employee</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
