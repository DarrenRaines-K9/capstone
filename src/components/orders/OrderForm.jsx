import { useLocation } from "react-router-dom"

export const OrderForm = () => {
   const location = useLocation()
   const customer = location.state.customer

   return ( <form>
        <section>
            <div>{customer.fullName}</div>
            <div>{customer.address}</div>
            <div>{customer.email}</div>
        </section>
    </form>)
}