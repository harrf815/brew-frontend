const API_ROOT = `http://localhost:3000/api/v1`;

const token = () => localStorage.getItem("token");


const headers = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: token()
  };
};


//ideally this "filter would be the state the user lives in"
const getBreweries = (filter) => {
  return fetch(`${API_ROOT}/breweries/${filter}`, { headers: headers() }).then(res =>
    res.json()
  );
};
//temp washington state hardcoded search
const getWashington = () => {
  return fetch(`${API_ROOT}/washington`, { headers: headers() }).then(res =>
    res.json()
  );
};

//login
const login = data => {
  return fetch(`${API_ROOT}/login`,{
    method:"POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  })
  .then(res => res.json())

};

//signup
const signup = data => {
  return fetch(`${API_ROOT}/signup`,{
    method:"POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  })
  .then(res => res.json())
};

//ensures user login accross the site
const getCurrentUser = () => {
  return fetch(`${API_ROOT}/getuser`,{
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${localStorage.token}`
    }
  })
  .then(res => res.json())
};



export const api = {
  auth: {
    login,
    signup,
    getCurrentUser
  },
  breweries: {
    getBreweries,
    getWashington
  }
};