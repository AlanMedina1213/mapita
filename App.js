import "react-native-gesture-handler";
import React from "react";
<<<<<<< HEAD
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import AuthNavigator from "./navigation/AuthNavigator.js";
import { ThemeProvider, ThemeContext } from './context/ThemeContext';

=======
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";  // Asegúrate de importar los temas aquí
import AuthNavigator from "./navigation/AuthNavigator";
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
>>>>>>> b0790072320257c117cbf4465b00de0988df263d

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
