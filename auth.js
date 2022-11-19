export const login = async (email, password) => {
  return await fetch("https://lab-api-bq.onrender.com/auth", {
    method: "POST",
    headers: { "content-Type": "application/json; charset=UTF-8", },
    body: JSON.stringify({
      email: email,
      password: password,
    })
  }).then(res => res.json())
    .catch((error) => {
      alert(error);
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
      alert(error);
    });
};

export const getToken = (() => localStorage.getItem("token")); 