export const handleApiResponse = (response, options = {}) => {
  return response
    .text()
    .then((text) => {
      const data = text && JSON.parse(text);

      if (!response.ok) {
        const error = (data && data.message) || response.statusText;

        return Promise.reject(error);
      }

      return data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};
