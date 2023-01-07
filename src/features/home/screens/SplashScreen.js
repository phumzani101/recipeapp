import { useEffect } from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Button from "../../../components/Button";
import colors from "../../../components/shared/colors";

const SplashScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../../../assets/splash.png")}
        style={styles.imageground}
      >
        <View style={styles.overlay} />
        <View style={styles.section}>
          <Image
            source={require("../../../../assets/logo.png")}
            style={styles.logo}
          />
          <Text style={styles.title}>100k Premium Recipes</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.bigtitle}>Get</Text>
          <Text style={styles.bigtitle}>Recipes</Text>
          <Text style={styles.subtitle}>Simple way to find Tasty Recipes</Text>
          <Button onPress={() => navigation.navigate("Home")}>
            Find Recipes
          </Button>
        </View>
      </ImageBackground>
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
    paddingVertical: 60,
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
export default SplashScreen;
