import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import Colors from "./utils/Colors";

export function PokemonDetails({ route }) {
  const { pokemon, color } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={[styles.image, { borderColor: color }]}
        resizeMode="contain"
        source={{ uri: pokemon.ThumbnailImage }}
      ></Image>
      <View style={[styles.detailsContainer, styles.titleContainer]}>
        <Text style={styles.name}>#{pokemon.number}</Text>
        <Text style={styles.name}>{pokemon.name}</Text>
      </View>

      <View style={[styles.detailsContainer, { flex: 1 }]}>
        <Text style={styles.detailsText}>Type: {pokemon.type.join(", ")}</Text>
        <Text style={styles.detailsText}>
          Weak against: {pokemon.weakness.join(", ")}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    marginTop: 12,
    marginBottom: 8,
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    backgroundColor: "transparent",
  },
  name: {
    marginBottom: 4,
    fontSize: 24,
    fontWeight: "bold",
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 8,
  },
  detailsContainer: {
    borderRadius: 8,
    width: "95%",
    backgroundColor: Colors.backgroundWhite,
    padding: 16,
    shadowColor: Colors.shadow,
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
  },
  detailsText: {
    fontSize: 16,
    marginBottom: 6,
  },
});

export default PokemonDetails;
