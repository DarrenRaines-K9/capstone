import { Link } from "react-router-dom";
import { getAllUser } from "../../services/employeeService";
import { useState, useEffect } from "react";
import "./Employee.css"
import { User } from "../users/User";

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
        <User user={u} />
        </Link>
      ))}
    </div>
  );
};
