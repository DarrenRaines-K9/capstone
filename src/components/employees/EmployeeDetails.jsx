import { useState, useEffect } from "react"
import { getAdminById } from "../../services/adminService"
import { useParams } from "react-router-dom"
import "./EmployeeDetails.css"
import { deleteAdmin, updateAdmin } from "../../services/updateAdmin"

export const EmployeeDetails = () => {
    const [admin, setAdmin] = useState([])
    const { employeeId } = useParams()

useEffect(() => {
    getAdminById(employeeId).then((data) => {
        const adminObj = data[0]
        setAdmin(adminObj)
    })
}, [employeeId])

const handleInputChange = (e) => {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value
    })
  }

const handleSaveChanges = () => {
    updateAdmin({...admin}).then(() => {
        window.alert("Employee Info Updated")
    })
}
const handleDeleteEmployee = () => {
    deleteAdmin({...admin}).then(() => {
        window.alert("Employee Deleted")
    })
}

return (
    <section className="details">
    <header className="details-header">{admin.user?.fullName}</header>
    <div>
        <span className="user-info">Email:</span>
        <div>
        <input type="text" defaultValue={admin.user?.email} onChange={handleInputChange} name="email"/>
        </div>
    </div>
    <div>
        <span className="details-info">Rate:</span>
        <div>
        <input type="text" defaultValue={admin.rate} onChange={handleInputChange} name="rate"/>
        </div>
    </div>
    <div>
        <span className="details-info"> Address:</span>
        <div>
        <input type="text" defaultValue={admin.address} onChange={handleInputChange} name="address"/>
        </div>
    </div>
    <div>
        <span className="details-info">Phone Number:</span>
        <div>
        <input type="text" defaultValue={admin.phoneNumber} onChange={handleInputChange} name="phoneNumber"/>
        </div>
    </div>
    <div>
        <span className="details-info">Title:</span>
        <div>
        <input type="text" defaultValue={admin.title} onChange={handleInputChange} name="title"/>
        </div>
    </div>
    <div>
    <button className="btn" onClick={handleSaveChanges}>Save Changes</button>
    <button className="btn" onClick={handleDeleteEmployee}>Delete</button>
    </div>
</section>
)


}
