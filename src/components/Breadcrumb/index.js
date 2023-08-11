import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Breadcrumb = ({ atual, navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text style={styles.text}>Início</Text>
      </TouchableOpacity>
      <Text style={styles.barra}>/</Text>
      <Text style={styles.text}>{atual}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 5,
    padding: 8,
    paddingLeft: 15,
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "flex-start",
    flexDirection: "row",
    borderTopRightRadius: 5,
    borderBottomEndRadius: 5,
  },
  text: { fontSize: 14, color: "#05b5f5", fontWeight: 300 },
  barra: {
    fontWeight: 300,
    fontSize: 16,
    color: "#d1d1d1",
    marginLeft: 11,
    marginRight: 13,
  },
});

export default Breadcrumb;
