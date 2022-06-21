import config from "@/config/config";
import handleApiResponse from "@/services/handleApiResponse";
const QueryString = require("qs");

export const genericService = {
  index,
  find,
  create,
  update,
  remove,
};

const noCacheHeader = {
  "Cache-Control": "no-cache",
  Pragma: "no-cache",
};

function index(dataType, options = {}) {
  return (data = {}) => {
    const requestOptions = {
      method: "GET",
      headers: {
        ...noCacheHeader,
      },
    };

    const formattedQueryString = QueryString.stringify({
      ...data,
    });

    return fetch(
      `${config.apiUrl}${dataType}?${formattedQueryString}`,
      requestOptions
    ).then(handleApiResponse);
  };
}

function find(path) {
  return () => {
    const requestOptions = {
      method: "GET",
      headers: {
        ...noCacheHeader,
      },
    };

    return fetch(`${config.apiUrl}${path}`, requestOptions).then(
      handleApiResponse
    );
  };
}

function remove(dataType) {
  return (data) => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...noCacheHeader,
      },
      body: JSON.stringify(data),
    };

    return fetch(`${config.apiUrl}${dataType}`, requestOptions).then(
      handleApiResponse
    );
  };
}

function update(dataType) {
  return (data) => {
    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        ...noCacheHeader,
      },
      body: JSON.stringify(data),
    };

    return fetch(`${config.apiUrl}${dataType}`, requestOptions).then(
      handleApiResponse
    );
  };
}

function create(dataType, options = {}) {
  return (data) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...noCacheHeader,
      },
      body: JSON.stringify(data),
    };

    return fetch(`${config.apiUrl}${dataType}`, requestOptions).then(
      handleApiResponse
    );
  };
}
