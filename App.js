import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import AuthNavigator from "./navigation/AuthNavigator.js";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import { OrientationProvider } from "./context/OrientationContext";

export default function App() {
  return (
    <OrientationProvider>
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <NavigationContainer theme={theme === "dark" ? DarkTheme : DefaultTheme}>
              <AuthNavigator />
            </NavigationContainer>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    </OrientationProvider>
  );
}
