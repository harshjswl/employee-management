import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    empName: "",
    empAddress: "",
    empSalary: ""
  });

  const { empName, empAddress, empSalary } = employee;

  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://3.6.126.70:8080/employees/save", employee);
    navigate('/');
  };

  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="card shadow p-4" style={{ maxWidth: '500px', width: '100%' }}>
        <h4 className="mb-4 text-center text-primary">Add New Employee</h4>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Name</label>
            <input
              type="text"
              className="form-control"
              name="empName"
              value={empName}
              onChange={onInputChange}
              placeholder="Enter full name"
              required
              style={{ backgroundColor: '#fff' }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Address</label>
            <input
              type="text"
              className="form-control"
              name="empAddress"
              value={empAddress}
              onChange={onInputChange}
              placeholder="Enter address"
              required
              style={{ backgroundColor: '#fff' }}
            />
          </div>
          <div className="mb-4">
            <label className="form-label fw-semibold">Salary</label>
            <input
              type="number"
              className="form-control"
              name="empSalary"
              value={empSalary}
              onChange={onInputChange}
              placeholder="Enter salary"
              required
              style={{ backgroundColor: '#fff' }}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 fw-semibold">
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
