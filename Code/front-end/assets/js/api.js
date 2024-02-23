const API_URL = "http://localhost:3000";

// Get request
async function get(endpoint) {
  const response = await fetch(`${API_URL}/${endpoint}`);
  return response.json();
}

// Post request
async function post(endpoint, data) {
  const response = await fetch(`${API_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

// Put request
async function put(endpoint, data) {
  const response = await fetch(`${API_URL}/${endpoint}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

// Delete request
async function del(endpoint) {
  const response = await fetch(`${API_URL}/${endpoint}`, {
    method: "DELETE",
  });
  return response.json();
}

export { get, post, put, del };
