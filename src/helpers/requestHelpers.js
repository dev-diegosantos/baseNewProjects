import API from "../utils/API";

export const requestAPI = ({ verb, endPoint, data, id, query }) => {
  const token = localStorage.getItem("Authorization");

  if (token) {
    Object.assign(API.defaults, {
      headers: { Authorization: `Basic ${token}` }
    });
  }

  switch (verb) {
    case "GET":
      return API.get(defineEndpoint(endPoint, id, query), data)
        .then(res => res.data)
        .catch(error => {
          throw error;
        });
    case "POST":
      return API.post(defineEndpoint(endPoint, id), data)
        .then(res => res.data)
        .catch(error => {
          throw error;
        });
    case "PUT":
      return API.put(defineEndpoint(endPoint, id), data)
        .then(res => res.data)
        .catch(error => {
          throw error;
        });
    case "DELETE":
      return API.delete(defineEndpoint(endPoint, id))
        .then(res => res.data)
        .catch(error => {
          throw error;
        });
  }
};

const defineEndpoint = (endPoint, id, query) => {
  if (typeof endPoint === "function") {
    return endPoint(id);
  }
  if (query) {
    return `${endPoint}${query}`;
  }
  if (id) {
    return `${endPoint}/${id}`;
  }
  return endPoint;
};

export default requestAPI;
