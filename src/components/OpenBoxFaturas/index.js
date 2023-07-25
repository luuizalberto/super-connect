import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const OpenBoxFaturas = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttons}>
        <MaterialIcons
          name="insert-drive-file"
          color={"white"}
          style={{ marginRight: 8 }}
        />
        <Text style={styles.text}>Copiar código de barras</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons}>
        <MaterialIcons
          name="print"
          color={"white"}
          style={{ marginRight: 8 }}
        />
        <Text style={styles.text}>Imprimir fatura</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons}>
        {/* <MaterialIcons name="pix" color={"white"} style={{ marginRight: 8 }} /> */}
        <Text style={styles.text}>Pix</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttons}>
        <MaterialIcons
          name="credit-card"
          color={"white"}
          style={{ marginRight: 8 }}
        />
        <Text allowFontScaling={true} style={styles.text}>
          Pagar com cartão de crédito
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons}>
        <MaterialIcons
          name="smartphone"
          color={"white"}
          style={{ marginRight: 8 }}
        />
        <Text style={styles.text}>Enviar fatura por SMS</Text>
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
    backgroundColor: "#0EA300",
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

export default OpenBoxFaturas;
