import React from "react";
import Pokedex from "./Pokedex";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { PokemonDetails } from "./PokemonDetails";
import Colors from "./utils/Colors";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.mainRed,
          },
          headerTintColor: "white",
        }}
        initialRouteName="Pokedex"
      >
        <Stack.Screen
          options={{
            title: "Pokédex",
          }}
          name="Pokedex"
          component={Pokedex}
        />
        <Stack.Screen
          options={{
            title: "Pokémon Details",
          }}
          name="PokemonDetails"
          component={PokemonDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
