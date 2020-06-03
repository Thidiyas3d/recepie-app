var defaultquery = "pasta";

const apiRequest = (query) => {
  if (query) return search(query);
  return search(defaultquery);
};

const search = async (query) => {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/search?query=${query}&number=6&apiKey=e93bc0d597e54c52b38d81d7e5173cee`
  );

  const { results } = await response.json();
  return results;
};

export { apiRequest };
