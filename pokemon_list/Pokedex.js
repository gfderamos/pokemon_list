import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import PokemonService from "./PokemonService";
import getBackgroundColor from "./utils/ColorBackgroundHelper";
import Colors from "./utils/Colors";

export function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    PokemonService.listPokemons()
      .then((response) => {
        const uniquePokemons = response.filter(
          (v, i, a) => a.findIndex((t) => t.id === v.id) === i
        );
        setPokemonList(uniquePokemons);
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  }, []);

  const renderItem = ({ item }) => {
    const color = getBackgroundColor(item.type);
    return (
      <TouchableOpacity
        style={[
          styles.itemContainer,
          styles.shadow,
          { backgroundColor: color },
        ]}
        onPress={() => {
          navigation.navigate("PokemonDetails", {
            pokemon: item,
            color: color,
          });
        }}
      >
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{ uri: item.ThumbnailImage }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pokemonList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    justifyContent: "center",
  },
  itemContainer: {
    flex: 1,
    borderRadius: 8,
    padding: 8,
    marginTop: 8,
    marginHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  shadow: {
    shadowColor: Colors.shadow,
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 8,
  },
});

export default Pokedex;
