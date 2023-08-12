import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";

const Privacidade = () => {
  const [isChecked, setCheched] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.checkbox}>
        <Checkbox
          style={{ marginTop: 4 }}
          value={isChecked}
          color={"#7451cf"}
          onValueChange={setCheched}
        />
        <Text
          style={{
            marginLeft: 8,
            color: "#bdbdbd",
            fontWeight: 300,
            lineHeight: 25,
          }}
        >
          Habilitar/Desabilitar login automático quando estiver na rede interna
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 15,
    marginBottom: 10,
  },
  checkbox: {
    marginLeft: 5,
    width: "96%",
    flexDirection: "row",
  },
});

export default Privacidade;
