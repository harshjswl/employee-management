import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ShowEmployee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const result = await axios.get("http://localhost:8080/employees/findall");
    setEmployees(result.data);
  };

  const deleteEmployee = async (empId) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      await axios.delete(`http://localhost:8080/employees/deletebyid/${empId}`);
      loadEmployees(); // refresh list
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4 text-primary">Employee List</h3>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <table className="table table-bordered table-striped table-hover">
            <thead className="table-dark text-center">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {employees.map((employee) => (
                <tr key={employee.empId}>
                  <td>{employee.empId}</td>
                  <td>{employee.empName}</td>
                  <td>{employee.empAddress}</td>
                  <td>{employee.empSalary}</td>
                  <td>
                    <Link
                      to={`/edit/${employee.empId}`}
                      className="btn btn-success btn-sm me-2"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteEmployee(employee.empId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {employees.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-muted">No employees found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="text-primary">Employee List</h3>
         <Link to="/addemployee" className="btn btn-success">
          + Add Employee
        </Link>
</div>

    </div>
  );
};

export default ShowEmployee;
