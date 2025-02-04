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

export const getAllEntrees = () => {
    return fetch(`http://localhost:8088/entrees`).then((res) => res.json())
}
export const getAllSides = () => {
    return fetch(`http://localhost:8088/sides`).then((res) => res.json())
}
export const getAllDrinks = () => {
    return fetch(`http://localhost:8088/drinks`).then((res) => res.json())
}

export const updateOrder = (order) => {
    return fetch(`http://localhost:8088/placedOrders/${order.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
		body: JSON.stringify(order),
    }).then((res) => res.json())
}