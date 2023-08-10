import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ButtonsContratos = ({ pagoAte, data }) => {
  return (
    <View style={[styles.container, { marginTop: 15 }]}>
      <View style={styles.textValor}>
        <Text style={[styles.textTitle]}>Pago Até:</Text>
        <Text style={styles.textSecundario}>28/07/2023{pagoAte}</Text>
      </View>
      <View style={styles.textValor}>
        <Text style={[styles.textTitle]}>Data do Contrato:</Text>
        <Text style={styles.textSecundario}>05/12/2021{data}</Text>
      </View>
      {/* 
      
      =============================
      
      */}
      <View style={{ alignItems: "flex-end" }}>
        <TouchableOpacity style={styles.buttons}>
          <MaterialIcons name="print" color={"white"} style={styles.icon} />
          <Text style={styles.text}>Imprimir contrato</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <MaterialIcons
            name="account-balance"
            color={"white"}
            style={styles.icon}
          />
          <Text style={styles.text}>Imprimir detalhamento</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textValor: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    marginTop: 15,
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 14,
  },
  textSecundario: { fontSize: 14, fontWeight: 300 },
  // =====

  // ===========
  buttons: {
    width: "75%",
    marginTop: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#A3009E",
    padding: 5,
    borderRadius: 4,
  },
  icon: { marginRight: 8, fontSize: 18 },
  text: { color: "white", fontSize: 14, textAlign: "center" },

  todas: {
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ButtonsContratos;
