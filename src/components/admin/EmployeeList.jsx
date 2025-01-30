import { Link } from "react-router-dom";
import { getAdminUser } from "../../services/employeeService";
import { useState, useEffect } from "react";

export const AdminList = () => {
  const [Admin, setAdmin] = useState([]);

  useEffect(() => {
    getAdminUser().then((adminArray) => {
      setAdmin(adminArray);
    });
  }, []);

  return (
    <div className="admin">
      {Admin.map((a) => (
        <Link className="all-admin" key={a.id} to={`/admin/${a.id}`}>
          <section className="admin-header">{a.user.fullName}</section>
          <section className="admin-info">{a.title}</section>
          <section className="admin-info">{a.rate}</section>
        </Link>
      ))}
    </div>
  );
};
