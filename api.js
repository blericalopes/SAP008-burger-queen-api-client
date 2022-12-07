export const login = async (email, password) => {
  return await fetch("https://lab-api-bq.onrender.com/auth", {
    method: "POST",
    headers: { "content-Type": "application/json", },
    body: JSON.stringify({
      email: email,
      password: password,
    })
  }).then(res => res.json())
    .catch((error) => {
      console.log(error)
     
    });
};

export const signin = async (name, email, password, role) => {
  return await fetch("https://lab-api-bq.onrender.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json", },
    body: JSON.stringify({ // pq não pode viajar via url em formato de obj
      name: name,
      email: email,
      password: password,
      role: role,
      restaurant: "Flash Burgers",
    }),
  }).then(res => res.json())
    .catch((error) => {
      console.log(error);
    });
};

export const myMenu = async () => {
  return await fetch("https://lab-api-bq.onrender.com/products", {
    method: "GET",
    headers: { "Content-Type": "application/json",
    Authorization: getToken("token"),},
  }).then((res) => res.json())
    .then((data) => { return data })
};

export const getToken = (() => localStorage.getItem("token")); 