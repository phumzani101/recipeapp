import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import CategoryList from "../../../components/CategoryList";
import Input from "../../../components/Input";
import colors from "../../../components/shared/colors";
import Title from "../../../components/Title";
import RecipeCard from "../../recipes/components/RecipeCard";
import RecipeItem from "../../recipes/components/RecipeItem";

const HomeScreen = ({ navigation }) => {
  const goToRecipes = () => {
    navigation.navigate("Recipes");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Input onPress={goToRecipes} pressable />
      <Title style={styles.title} text="Featured Recipes" />

      <FlatList
        data={[1, 2, 3]}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <RecipeCard
            title="Fuckerty  svsdfvfv badbdfb"
            image="https://placeimg.com/640/480/any"
            author={{ name: "Fuck", image: "https://placeimg.com/640/480/any" }}
            rating={4.3}
            time="20 mins"
          />
        )}
      />

      <CategoryList
        categories={["All", "Recipes", "Featured"]}
        selected={"All"}
        onCategoryPress={() => {}}
      />

      <FlatList
        data={[1, 2, 3]}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <RecipeItem
            title="Fuckerty  svsdfvfv badbdfb"
            image="https://placeimg.com/640/480/any"
            author={{ name: "Fuck", image: "https://placeimg.com/640/480/any" }}
            rating={4.3}
            time="20 mins"
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
