const API_ROOT = `https://brew-project-api.herokuapp.com/api/v1/`;

const token = () => localStorage.getItem("token");

const headers = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: token(),
  };
};

//!search for breweries by state
const getBreweries = (state) => {
  return fetch(`${API_ROOT}/${state}`)
    .then(res => res.json())
}

//temp washington state hardcoded search
const getWashington = () => {
  return fetch(`${API_ROOT}/washington`, { headers: headers() }).then((res) =>
    res.json()

  );
};

//login
const login = (data) => {
  return fetch(`${API_ROOT}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

//signup
const signup = (data) => {
  return fetch(`${API_ROOT}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

//ensures user login accross the site
const getCurrentUser = () => {
  return fetch(`${API_ROOT}/getuser`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    },
  }).then((res) => res.json());
};

const addComment = (feedback) => {
  return fetch(`${API_ROOT}/feed_backs`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(feedback)
  })
    .then(res => res.json())
}

const getFeedBack = (id) => {
  return fetch(`${API_ROOT}/feed_backs/:feed_back_id/users/:user_id/breweries/${id}`)
    .then(res => res.json())
}

const editComment = (id, comments) => {
  return fetch(`${API_ROOT}/feed_backs/${id}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(comments)
  })
    .then(res => res.json())
}

const delFeedBack = id => {
  return fetch(`${API_ROOT}/feed_backs/${id}`, {
    method: 'DELETE',
  })
    .then(res => res.json())
}



const getStates = () => { return fetch(`${API_ROOT}/getstates`).then((res) => res.json())}

const getBrewery = (id) => fetch(`${API_ROOT}/breweries/${id}`).then((res) => res.json())



export const api = {
  auth: {
    login,
    signup,
    getCurrentUser,
  },
  breweries: {
    getStates,
    getWashington,
    getBrewery,
    getBreweries,
    addComment,
    getFeedBack,
    delFeedBack,
    editComment
  }
};
