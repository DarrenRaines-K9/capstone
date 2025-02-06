import { useState } from "react";
import { createCustomer } from "../../services/orderService";
import { useNavigate } from "react-router-dom";

export const NewOrder = () => {
  const [customer, setNewCustomer] = useState({
    fullName: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  const navigate = useNavigate();

  const handleNext = (event) => {
    event.preventDefault();
    if (
      customer.fullName &&
      customer.email &&
      customer.address &&
      customer.phoneNumber
    ) {
      const newCustomer = {
        fullName: customer.fullName,
        email: customer.email,
        address: customer.address,
        phoneNumber: parseInt(customer.phoneNumber),
      };
      createCustomer(newCustomer).then((customerObj) => {
        navigate("/orders/new-order/order-form", {
          state: { customer: customerObj },
        });
      });
    } else {
      window.alert("Fill Out All Fields");
    }
  };

  return (
    <form>
      Please Fill out *ALL* Customer Information
      <fieldset>
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="First and Last Name"
            onChange={(event) => {
              const customerCopy = { ...customer };
              customerCopy.fullName = event.target.value;
              setNewCustomer(customerCopy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            onChange={(event) => {
              const customerCopy = { ...customer };
              customerCopy.email = event.target.value;
              setNewCustomer(customerCopy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Address"
            onChange={(event) => {
              const customerCopy = { ...customer };
              customerCopy.address = event.target.value;
              setNewCustomer(customerCopy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="number"
            className="form-control"
            placeholder="000-000-0000"
            onChange={(event) => {
              const customerCopy = { ...customer };
              customerCopy.phoneNumber = event.target.value;
              setNewCustomer(customerCopy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <button className="btn" onClick={handleNext}>
          Next
        </button>
      </fieldset>
    </form>
  );
};
