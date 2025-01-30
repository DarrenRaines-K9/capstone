export const getAdminById = (userId) => {
    return fetch(`http://localhost:8088/admins?userId=${userId}&_expand=user`).then((res) => res.json())
}