import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import colors from "../../../components/shared/colors";

const RecipesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Recipes</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
  imageground: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  section: {
    paddingHorizontal: 15,
    paddingVertical: 40,
    zIndex: 999,
  },
  logo: {
    alignSelf: "center",
    width: 80,
    height: 80,
  },
  bigtitle: {
    color: colors.white,
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 30,
  },
  subtitle: {
    color: colors.white,
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
    marginTop: 20,
  },
  overlay: {
    backgroundColor: "black",
    flex: 1,
    opacity: 0.5,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});

export default RecipesScreen;
