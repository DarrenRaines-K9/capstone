export const getAdminById = (userId) => {
    return fetch(`http://localhost:8088/admins?userId=${userId}&_expand=user`).then((res) => res.json())
}

export const updateAdmin = (admin) => {
    return fetch(`http://localhost:8088/admins/${admin.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
		body: JSON.stringify(admin),
    })
}

export const deleteAdmin = (admin) => {
    return fetch(`http://localhost:8088/admins/${admin.id}`, {method: "DELETE"})
}

export const updateUser = (user) => {
    return fetch(`http://localhost:8088/users/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
		body: JSON.stringify(user),
    }).then((res) => res.json())
}