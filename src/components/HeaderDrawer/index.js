import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// import { Container } from './styles';

const HeaderDrawer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.boxUser}
        onPress={() => navigation.navigate("Perfil")}
      >
        <Text style={{ fontSize: 30, color: "#fff" }}>D</Text>
      </TouchableOpacity>
      <View style={styles.boxText}>
        <Text style={styles.nameUser}>Denize</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
          <Text style={styles.verDados}>ver dados</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.boxIcon}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <MaterialIcons name="exit-to-app" color={"#bfbfbf"} size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderDrawer;
