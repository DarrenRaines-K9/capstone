import { useEffect, useState } from "react";
import { getAllOrders } from "../../services/orderService";
import { Link } from "react-router-dom";
import "./Order.css"

export const OrderList = () => {
    const [orders, setAllOrders] = useState([])

useEffect(() => {
     getAllOrders().then((orderArray) => {
        setAllOrders(orderArray)
     });
}, []);


return (
    <div className="orders">
        {orders.map((o) => (
            <Link className="all-orders" key={o.id} to={`/orders/${o.id}`}>
                <div className="order">
                    <section className="order-header">Order #{o.id}</section>
                    <section className="order-info">Entree: {o.entree.description}</section>
                    <section className="order-info">Side: {o.side.description}</section>
                    <section className="order-info">Drink: {o.drink.description}</section>
                </div>
            </Link>
        ))}

    </div>
)
}