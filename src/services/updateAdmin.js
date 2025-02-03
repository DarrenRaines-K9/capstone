export const updateAdmin = (admin) => {
    return fetch(`http://localhost:8088/admins/${admin.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
		body: JSON.stringify(admin),
    }).then((res) => res.json())
}