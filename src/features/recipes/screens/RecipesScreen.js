import { useContext } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Input from "../../../components/Input";
import colors from "../../../components/shared/colors";
import { RecipeContext } from "../../../services/RecipeContext";
import RecipeItem from "../components/RecipeItem";

const RecipesScreen = () => {
  const { recipes = [], isLoading } = useContext(RecipeContext);
  return (
    <SafeAreaView style={styles.container}>
      <Input autoFocus />
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
        </View>
      )}
      {recipes.length > 0 && (
        <FlatList
          ListHeaderComponent={() => (
            <>
              <Text style={styles.title}>Recipes</Text>
            </>
          )}
          data={recipes}
          style={styles.list}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
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
                  : {
                      name: "unknown",
                      image: "https://placeimg.com/640/480/any",
                    }
              }
              rating={item?.user_ratings?.score || 0}
              time={item?.cook_time_minutes}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    color: colors.black,
    fontSize: 18,
    fontWeight: "500",
  },
  list: {
    marginTop: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
  },
});

export default RecipesScreen;
