import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/features/home/screens/HomeScreen";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./src/features/home/screens/SplashScreen";
import RecipesScreen from "./src/features/recipes/screens/RecipesScreen";
import { RecipeContextProvider } from "./src/services/RecipeContext";
import RecipeDetailsScreen from "./src/features/recipes/screens/RecipeDetailsScreen";

const Stack = createStackNavigator();

export default function App() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#FFFFFF",
    },
  };

  return (
    <RecipeContextProvider>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: "center",
            headerShadowVisible: false,
          }}
        >
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerLeft: null, gestureEnabled: false }}
          />
          <Stack.Screen
            name="Recipes"
            component={RecipesScreen}
            // options={{ headerLeft: null, gestureEnabled: false }}
          />
          <Stack.Screen
            name="RecipeDetails"
            component={RecipeDetailsScreen}
            // options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </RecipeContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
