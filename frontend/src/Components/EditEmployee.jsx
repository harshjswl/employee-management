import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditEmployee = () => {
  const { empId } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    empName: '',
    empAddress: '',
    empSalary: ''
  });

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/employees/findbyid/${empId}`);
      setEmployee(res.data);
    } catch (err) {
      alert("Failed to fetch employee data.");
    }
  };

  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/employees/update/${empId}`, employee);
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4 text-warning">Edit Employee</h3>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={onSubmit} className="p-4 border rounded shadow-sm bg-light">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="empName"
                className="form-control"
                value={employee.empName}
                onChange={onInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <input
                type="text"
                name="empAddress"
                className="form-control"
                value={employee.empAddress}
                onChange={onInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Salary</label>
              <input
                type="number"
                name="empSalary"
                className="form-control"
                value={employee.empSalary}
                onChange={onInputChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Update Employee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditEmployee;
