import { useContext, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import CategoryList from "../../../components/CategoryList";
import Input from "../../../components/Input";
import colors from "../../../components/shared/colors";
import Title from "../../../components/Title";
import { RecipeContext } from "../../../services/RecipeContext";
import RecipeCard from "../../recipes/components/RecipeCard";
import RecipeItem from "../../recipes/components/RecipeItem";

const HomeScreen = ({ navigation }) => {
  const { recipes = [], tags = [] } = useContext(RecipeContext);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const goToRecipes = () => {
    navigation.navigate("Recipes");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Input onPress={goToRecipes} pressable />
      <Title style={styles.title} text="Featured Recipes" />

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <RecipeCard
            title={item.name}
            image={item.thumbnail_url || "https://placeimg.com/640/480/any"}
            author={
              item.credits.length
                ? {
                    name: item.credits[0].name,
                    image: item.credits[0].image_url,
                  }
                : { name: "unknown", image: "https://placeimg.com/640/480/any" }
            }
            rating={item?.user_ratings?.score || 0}
            time={item?.cook_time_minutes}
            onPress={() => {
              navigation.navigate("RecipeDetails", { recipe: item });
            }}
          />
        )}
      />

      <CategoryList
        categories={tags}
        selected={selectedCategory}
        onCategoryPress={setSelectedCategory}
      />

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <RecipeItem
            title={item.name}
            image={item.thumbnail_url || "https://placeimg.com/640/480/any"}
            author={
              item.credits.length
                ? {
                    name: item.credits[0].name,
                    image: item.credits[0].image_url,
                  }
                : { name: "unknown", image: "https://placeimg.com/640/480/any" }
            }
            rating={item?.user_ratings?.score || 0}
            time={item?.cook_time_minutes}
            onPress={() => {
              navigation.navigate("RecipeDetails", { recipe: item });
            }}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    color: colors.black,
    fontSize: 18,
    fontWeight: "500",
    marginTop: 24,
  },
});

export default HomeScreen;
