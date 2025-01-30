import { useState, useEffect } from "react"
import { getAdminById } from "../../services/adminService"
import { useParams } from "react-router-dom"
import "./EmployeeDetails.css"

export const EmployeeDetails = () => {
    const [admin, setAdmin] = useState([])
    const { employeeId } = useParams()

useEffect(() => {
    getAdminById(employeeId).then((data) => {
        const adminObj = data[0]
        setAdmin(adminObj)
    })
}, [employeeId])
return (
    <section className="details">
    <header className="details-header">{admin.user?.fullName}</header>
    <div>
        <span className="user-info">Email : </span>
        {admin.user?.email}
    </div>
    <div>
        <span className="details-info">Specialty : </span>
        {admin.title}
    </div>
    <div>
        <span className="details-info"> Rate : </span>
        {admin.rate}
    </div>
    <div>
        <span className="details-info"> Address : </span>
        {admin.address}
    </div>
    <div>
        <span className="details-info"> Phone Number : </span>
        {admin.phoneNumber}
    </div>
    <div>
        <span className="details-info"> Title: </span>
        {admin.title}
    </div>
</section>
)


}
