export const getAllOrders = () => {
    return fetch(`http://localhost:8088/placedOrders?_expand=entree&_expand=side&_expand=drink&_expand=customer&_expand=admin`).then(
        (res) => res.json()
    )
}
export const getOrderById = (id) => {
    return fetch(`http://localhost:8088/placedOrders?id=${id}&_expand=admin&_expand=customer&_expand=entree&_expand=drink&_expand=side`).then(
        (res) => res.json()
    )
}

