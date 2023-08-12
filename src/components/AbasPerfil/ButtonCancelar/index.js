import { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const ButtonCancelar = () => {
  return (
    <View>
      <View style={styles.bottonCancelar}>
        <Text style={styles.textCancelar}>CANCELAR</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottonCancelar: {
    backgroundColor: "#787878",
    borderRadius: 4,
    padding: 12,
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 3,
  },
  textCancelar: { color: "#fff", fontSize: 12 },
});

export default ButtonCancelar;
