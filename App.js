import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/features/home/screens/HomeScreen";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./src/features/home/screens/SplashScreen";
import RecipesScreen from "./src/features/recipes/screens/RecipesScreen";

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
    <>
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
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </>
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
