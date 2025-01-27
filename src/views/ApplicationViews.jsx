import { useEffect, useState } from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/navbar/NavBar"



export const ApplicationViews = () => {
  const [user, setUser] = useState({})
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("meal_user")))
  }, [])
  return (<>
    <Routes>
      <Route path="/" element={
        <>
          <NavBar />
          <Outlet />
        </>
      }>
        <Route index element={<>Home</>} />

        <Route path="employees">
          <Route index element={<>Employee List</>} />
          <Route path=":employeeId" element={<>Employee Details</>} />
          <Route path="edit/:employeeId" element={<>Edit Employee Details</>} />

        </Route>    
      </Route>
    </Routes >
  </>)

}