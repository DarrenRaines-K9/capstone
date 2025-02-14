import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EmployeeDetails.css";
import {
  deleteAdmin,
  updateAdmin,
  getAdminById,
  updateUser,
} from "../../services/adminService";

export const EmployeeDetails = () => {
  const [admin, setAdmin] = useState([]);
  const { employeeId } = useParams();
  const [user, setUser] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    getAdminById(employeeId).then((data) => {
      const adminObj = data[0];
      setAdmin(adminObj);
      const userObj = adminObj.user;
      setUser(userObj);
    });
  }, [employeeId]);

  const handleInputChange = (e) => {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSaveChanges = () => {
    const adminUpdates = {
      id: admin.id,
      fullName: admin.fullName,
      rate: parseInt(admin.rate),
      address: admin.address,
      phoneNumber: parseInt(admin.phoneNumber),
      title: admin.title,
      userId: user.id,
    };

    const userUpdates = {
      id: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
    };

    updateAdmin(adminUpdates).then(() => {
      updateUser(userUpdates).then(() => window.alert("Employee Info Updated"));
    });
  };

  const handleBack = () => {
    navigate("/employees")
  }

  const handleDeleteEmployee = () => {
    deleteAdmin({ ...admin }).then(() => {
      window.alert("Employee Deleted");
    });
  };

  return (
    <section className="details">
      <header className="details-header">{admin.fullName}</header>
      <div>
        <span className="user-info">Email:</span>
        <div>
          <input
            type="text"
            defaultValue={user.email}
            onChange={handleEmailChange}
            name="email"
          />
        </div>
      </div>
      <div>
        <span className="details-info">Rate:</span>
        <div>
          <input
            type="text"
            defaultValue={admin.rate}
            onChange={handleInputChange}
            name="rate"
          />
        </div>
      </div>
      <div>
        <span className="details-info"> Address:</span>
        <div>
          <input
            type="text"
            defaultValue={admin.address}
            onChange={handleInputChange}
            name="address"
          />
        </div>
      </div>
      <div>
        <span className="details-info">Phone Number:</span>
        <div>
          <input
            type="text"
            defaultValue={admin.phoneNumber}
            onChange={handleInputChange}
            name="phoneNumber"
          />
        </div>
      </div>
      <div>
        <span className="details-info">Title:</span>
        <div>
          <input
            type="text"
            defaultValue={admin.title}
            onChange={handleInputChange}
            name="title"
          />
        </div>
      </div>
      <div>
        <button className="btn" onClick={handleDeleteEmployee}>
          Delete
        </button>
        <button className="btn" onClick={handleSaveChanges}>
          Save Changes
        </button>
        <button className="btn" onClick={handleBack}>
          Back
        </button>
      </div>
    </section>
  );
};
