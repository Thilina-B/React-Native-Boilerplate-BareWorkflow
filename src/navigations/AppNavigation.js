import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./AppNavigators";

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
