import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// import { Container } from './styles';

const BoxTitle = ({ title, color, numero, textNum, icon }) => {
  return (
    <View style={[styles.boxMaior, { backgroundColor: `${color}` }]}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialIcons
          name={icon}
          size={40}
          color={"white"}
          style={{ marginRight: 15 }}
        />
        <Text style={{ fontSize: 20, color: "white" }}>{title}</Text>
      </View>
      <View style={styles.contractOn}>
        <Text style={{ color: "#fff", fontSize: 18, marginBottom: -5 }}>
          {numero}
        </Text>
        <Text style={{ color: "#fff", fontSize: 12 }}>{textNum}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxMaior: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#00A33F",
    alignItems: "center",
    borderRadius: 4,
    top: -30,
    marginBottom: -25,
    elevation: 10,
  },
  contractOn: { alignItems: "flex-end" },
});

export default BoxTitle;
