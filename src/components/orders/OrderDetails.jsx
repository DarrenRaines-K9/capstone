import { useState } from "react";
import { getOrderById, getAllEntrees, getAllSides, getAllDrinks, updateOrder } from "../../services/orderService";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./OrderDetails.css"

export const OrderDetails = () => {
  const [order, setOrder] = useState([]);
  const [sides, setSides] = useState([])
  const [chosenSides, setChosenSides] = useState(0)
  const [drinks, setDrinks] =useState([])
  const [chosenDrinks, setChosenDrinks] = useState(0)
  const [entrees, setEntrees] = useState([])
  const [chosenEntrees, setChosenEntrees] = useState(0)
  const { orderId } = useParams();

  useEffect(() => {
    getOrderById(orderId).then((o) => {
      const orderObj = o[0];
      setOrder(orderObj);
    });
  }, [orderId]);

useEffect(() => {
  getAllEntrees().then((array) => setEntrees(array))
  getAllSides().then((array) => setSides(array))
  getAllDrinks().then((array) => setDrinks(array))
},[])  

const handleSaveOrder = () => {
  if (
    chosenEntrees !== 0 &&
    chosenSides !== 0 &&
    chosenDrinks !== 0 
   ) {
     const orderObject = {
       id: order.id,
       entreeId: parseInt(chosenEntrees),
       sideId: parseInt(chosenSides),
       drinkId: parseInt(chosenDrinks),
       adminId: order.adminId,
       customerId: order.customerId
      }
      updateOrder(orderObject).then(() => {
        window.alert("Order Updated")
      })
    }
  }

  return (    
    <section className="details">
    <header className="o-details-header">{order.customer?.fullName}</header>
    <div>
        <span className="user-info">Email: </span>
        {order.customer?.email}
    </div>
    <div>
        <span className="details-info">Address: </span>
        {order.customer?.address}
    </div>
    <div>
        <span className="details-info"> Phone Number: </span>
        {order.customer?.phoneNumber}
    </div>
    <div>
      Entree:
       <select 
       defaultValue={order.entreeId}
       onChange={(event) => {
            setChosenEntrees(event.target.value)
          }}>
       {entrees.map((e) => {
        return (
          <option value={parseInt(e.id)} key={e.id} >{e.description}</option>
        )
       })}
       </select>
    </div>
    <div>
      Side:
      <select 
      defaultValue={order.sideId}
      onChange={(event) => {
              setChosenSides(event.target.value)
            }}>
        {sides.map((s) => {
          return (
            <option value={parseInt(s.id)} key={s.id} >{s.description}</option>
          )
        })}
      </select>
    </div>
    <div>
    Drinks:
      <select 
      defaultValue={order.drinkId}
      onChange={(event) => {
              setChosenDrinks(event.target.value)
            }}>
        {drinks.map((d) => {
          return (
            <option value={parseInt(d.id)} key={d.id} >{d.description}</option>
          )
        })}
      </select>
    </div>
    <div>
      <button className="btn" onClick={handleSaveOrder}>Save Changes</button>
    </div>
</section>
  )
};
