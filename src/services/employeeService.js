//here is a GET in order to fetch a user by email for login
export const getUserByEmail = (email) => {
  return fetch(`http://localhost:8088/users?email=${email}`).then((res) => res.json())
}

//here a POST in order to create a new user 
export const createUser = (customer) => {
  return fetch("http://localhost:8088/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer), }).then((res) => res.json())
}


//here is a GET in order to get a USER that is ADMINs full information. utilizing an expand query
export const getAllUser = () => {
  return fetch(`http://localhost:8088/users`).then((res) => res.json())
} 