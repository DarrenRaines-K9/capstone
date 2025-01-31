import { useState } from "react";
import { getOrderById } from "../../services/orderService";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./OrderDetails.css"

export const OrderDetails = () => {
  const [order, setOrder] = useState([]);
  const { orderId } = useParams();

  useEffect(() => {
    getOrderById(orderId).then((o) => {
      const orderObj = o[0];
      setOrder(orderObj);
    });
  }, [orderId]);

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
        <span className="details-info"> Entree: </span>
        {order.entree?.description}
    </div>
    <div>
        <span className="details-info"> Side: </span>
        {order.side?.description}
    </div>
    <div>
        <span className="details-info"> Drink: </span>
        {order.drink?.description}
    </div>
</section>
  )
};
