import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import colors from "../../../components/shared/colors";
import Title from "../../../components/Title";

const RecipeDetailsScreen = ({ route }) => {
  const { recipe } = route.params;
  const image = recipe?.thumbnail_url || "https://placeimg.com/640/480/any";
  const nutrition = recipe?.nutrition;
  delete nutrition?.updated_at;
  const nutritionKeys = Object.keys(nutrition || {}) || [];
  const instructions = recipe?.instructions || [];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {image && (
          <Image
            source={{
              uri: image,
            }}
            style={styles.image}
          />
        )}
        <Title text={recipe.name} style={{ marginVertical: 24 }} />

        {nutritionKeys?.map((key, i) => (
          <View key={i} style={styles.row}>
            <Text style={styles.key}>{key}</Text>
            <Text>{nutrition[key]}</Text>
          </View>
        ))}

        <Title text="Instructions" style={{ marginTop: 24 }} />

        {instructions?.map((instruction, index) => (
          <View key={index} style={styles.instructionRow}>
            <Text style={styles.key}>{instruction?.position})</Text>
            <Text>{instruction?.display_text}</Text>
          </View>
        ))}
      </ScrollView>
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
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginTop: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    padding: 8,
    marginVertical: 4,
  },
  key: {
    fontSize: 12,
    color: colors.black,
    textTransform: "capitalize",
    paddingBottom: 2,
    marginBottom: 2,
    marginRight: 10,
    fontWeight: "bold",
  },

  instructionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    padding: 8,
    marginVertical: 8,
  },
});

export default RecipeDetailsScreen;
