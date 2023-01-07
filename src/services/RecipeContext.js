import { createContext, useEffect, useState } from "react";
import { getRecipesRequest } from "./index";

export const RecipeContext = createContext();

export const RecipeContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [tags, setTags] = useState([
    "All",
    "Breakfast",
    "Lunch",
    "Under 15 Minutes",
    "Sides",
  ]);
  const [featured, setFeatured] = useState([]);

  const search = async ({
    from = "0",
    size = "10",
    tags = "under_30_minutes",
    q = null,
  }) => {
    setIsLoading(true);
    try {
      setRecipes([]);
      const res = await getRecipesRequest({ from, size, tags, q });
      let recipes = res.data.results;
      setRecipes(recipes);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setRecipes([]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    search({});
  }, []);

  useEffect(() => {
    let tagsList = [...tags];
    if (recipes.length) {
      recipes?.forEach((recipe) => {
        recipe?.tags?.forEach((tag) => {
          if (!tagsList.includes(tag.display_name)) {
            tagsList.push(tag.display_name);
          }
        });
      });
      setTags(tagsList);
    }
  }, [recipes]);

  return (
    <RecipeContext.Provider value={{ recipes, search, tags, isLoading }}>
      {children}
    </RecipeContext.Provider>
  );
};
