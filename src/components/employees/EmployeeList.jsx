import { Link } from "react-router-dom";
import { getAllUser } from "../../services/employeeService";
import { useState, useEffect } from "react";
import "./Employee.css"

export const EmployeeList = () => {
  const [Admin, setAdmin] = useState([]);

  useEffect(() => {
    getAllUser().then((userArray) => {
      setAdmin(userArray);
    });
  }, []);

  return (
    <div className="users">
      {Admin.map((u) => (
        <Link className="all-users" key={u.id} to={`/employees/${u.id}`}>
         <div className="user">
          <section className="user-Header">{u.fullName}</section>
          <section className="user-info">{u.email}</section>
          <section className="user-info">{u.isAdmin}</section>
         </div>
        </Link>
      ))}
    </div>
  );
};
