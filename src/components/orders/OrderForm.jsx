import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAdminById } from "../../services/adminService";
import {
  getAllEntrees,
  getAllSides,
  getAllDrinks,
} from "../../services/orderService";
import { placeNewOrder } from "../../services/orderService";

export const OrderForm = ({ currentUser }) => {
  const [admin, setAdmin] = useState([]);
  const [entrees, setEntrees] = useState([]);
  const [sides, setSides] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [chosenEntree, setChosenEntree] = useState(0);
  const [chosenSide, setChosenSide] = useState(0);
  const [chosenDrink, setChosenDrink] = useState(0);

  const navigate = useNavigate()
  const location = useLocation();
  const customer = location.state.customer;

  useEffect(() => {
    getAdminById(currentUser.id).then((data) => {
      const adminObj = data[0];
      setAdmin(adminObj);
    });
  }, [currentUser]);

  useEffect(() => {
    getAllEntrees().then((array) => setEntrees(array));
    getAllSides().then((array) => setSides(array));
    getAllDrinks().then((array) => setDrinks(array));
  }, []);

  useEffect(() => {
    setChosenEntree(entrees.id);
    setChosenSide(sides.id);
    setChosenDrink(drinks.id);
  }, [entrees.id, sides.id, drinks.id]);

  const handlePlaceOrder = (event) => {
    event.preventDefault()
      const newOrder = {
          entreeId: parseInt(chosenEntree),
          sideId: parseInt(chosenSide),
          drinkId: parseInt(chosenDrink),
          adminId: admin.id,
          customerId: customer.id
      }
      if (chosenEntree !== 0 && chosenSide !== 0 && chosenDrink !== 0) {
          placeNewOrder(newOrder).then(() => {
              navigate("/orders")
})}
  };

  return (
    <form>
      <section>
        <div>{customer.fullName}</div>
        <div>{customer.address}</div>
        <div>{customer.email}</div>
        <div>{admin.id}</div>
      </section>
      <section>
        <div>
          Select ONE Entree:
          <select
            onChange={(event) => {
              setChosenEntree(parseInt(event.target.value));
            }}
          >
            {entrees.map((e) => {
              return (
                <option value={parseInt(e.id)} key={e.id}>
                  {e.description}
                </option>
              );
            })}
          </select>
        </div>
      </section>
      <section>
        <div>
          Select ONE Side:
          <select
            onChange={(event) => {
              setChosenSide(parseInt(event.target.value));
            }}
          >
            {sides.map((s) => {
              return (
                <option value={parseInt(s.id)} key={s.id}>
                  {s.description}
                </option>
              );
            })}
          </select>
        </div>
      </section>
      <section>
        <div>
          Select ONE Drink:
          <select
            onChange={(event) => {
              setChosenDrink(parseInt(event.target.value));
            }}
          >
            {drinks.map((d) => {
              return (
                <option value={parseInt(d.id)} key={d.id}>
                  {d.description}
                </option>
              );
            })}
          </select>
        </div>
      </section>
      <div>
        <button className="btn" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </form>
  );
};
