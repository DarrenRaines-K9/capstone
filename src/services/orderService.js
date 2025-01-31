export const getAllOrders = () => {
    return fetch(`http://localhost:8088/placedOrders?_expand=entree&_expand=side&_expand=drink&_expand=customer&_expand=admin`).then(
        (res) => res.json()
    )
}