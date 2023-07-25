import React from "react";
import { Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// import { Container } from './styles';

const SemConteudo = ({ title }) => {
  return (
    <Text
      style={{
        marginTop: 20,
        textAlign: "center",
        fontSize: 12,
        color: "#9300a3",
        alignItems: "center",
      }}
    >
      Olá, você não tem pendências em seus
      <Text style={{ fontWeight: "bold", fontSize: 14 }}> {title} 😁</Text>
    </Text>
  );
};

export default SemConteudo;
