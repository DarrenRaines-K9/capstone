import { useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/navbar/NavBar";
import { Welcome } from "../components/welcome/Welcome";
import { EmployeeList } from "../components/employees/EmployeeList";
import { EmployeeDetails } from "../components/employees/EmployeeDetails";
import { OrderList } from "../components/orders/OrderList";
import { OrderDetails } from "../components/orders/OrderDetails";
import { NewOrder } from "../components/orders/NewOrder";
import { OrderForm } from "../components/orders/OrderForm";

export const ApplicationViews = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("meal_user")));
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Outlet />
            </>
          }
        >
          <Route index element={<Welcome />} />
          <Route path="employees">
            <Route index element={<EmployeeList />} />
            <Route path=":employeeId" element={<EmployeeDetails />} />
            <Route
              path="edit/:employeeId"
              element={<>Edit Employee Details</>}
            />
          </Route>
          <Route path="orders">
            <Route index element={<OrderList />} />
            <Route path=":orderId" element={<OrderDetails />} />
            <Route path="new-order" element={<NewOrder />} />
            <Route
              path="new-order/order-form"
              element={<OrderForm currentUser={user} />}
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
