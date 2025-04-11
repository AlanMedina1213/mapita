import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";  // Asegúrate de importar los temas aquí
import AuthNavigator from "./navigation/AuthNavigator";
import { ThemeProvider, ThemeContext } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ theme }) => (
          <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
            <AuthNavigator />
          </NavigationContainer>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}
