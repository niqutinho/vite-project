const fetchData = async (url, options = {}) => {
  const response = await fetch(url, options);
  const json = await response.json();

  if (!response.ok) {
    throw new Error(
      json.message || `Request failed with status ${response.status}`,
    );
  }

  return json;
};

export {fetchData};
