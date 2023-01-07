import axios from "axios";

// params { from: "0", size: "10", tags: "under_30_minutes" }
export const getRecipesRequest = async ({
  from = "0",
  size = "10",
  tags = "under_30_minutes",
  q = null,
}) => {
  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/list",
    params: { from, size, tags, q },
    headers: {
      "X-RapidAPI-Key": "add your key here",
      "X-RapidAPI-Host": "add your key here",
    },
  };

  return await axios.request(options);
};
