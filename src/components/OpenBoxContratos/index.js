import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const OpenBoxContratos = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttons}>
        <MaterialIcons
          name="description"
          color={"white"}
          style={{ marginRight: 8 }}
        />
        <Text style={styles.text}>Imprimir contrato</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons}>
        <MaterialIcons
          name="print"
          color={"white"}
          style={{ marginRight: 8 }}
        />
        <Text style={styles.text}>Imprimir detalhamento</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // =====

  // ===========
  buttons: {
    marginTop: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#A3009E",
    padding: 5,
    borderRadius: 4,
  },
  text: { color: "white", fontSize: 9, textAlign: "center" },

  todas: {
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default OpenBoxContratos;
