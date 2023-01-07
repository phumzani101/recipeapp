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
      "X-RapidAPI-Key": "b1fabd772dmsh41971a86919976ap17e62bjsn760ea97b0e34",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  return await axios.request(options);
};
