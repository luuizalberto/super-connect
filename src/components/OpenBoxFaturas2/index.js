import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const OpenBoxFaturas2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textValor}>
        <Text style={[styles.textTitle]}>Valor:</Text>
        <Text style={{ fontSize: 14 }}>R$ 49,90</Text>
      </View>
      {/* 
      
      =============================
      
      */}
      <View style={{ alignItems: "flex-end" }}>
        <TouchableOpacity style={styles.buttons}>
          <MaterialIcons
            name="insert-drive-file"
            color={"white"}
            style={styles.icon}
          />
          <Text style={styles.text}>Copiar código de barras</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <MaterialIcons name="print" color={"white"} style={styles.icon} />
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
            style={styles.icon}
          />
          <Text allowFontScaling={true} style={styles.text}>
            Pagar com cartão de crédito
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <MaterialIcons
            name="smartphone"
            color={"white"}
            style={styles.icon}
          />
          <Text style={styles.text}>Enviar fatura por SMS</Text>
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
  // =====

  // ===========
  buttons: {
    width: "75%",
    marginTop: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0EA300",
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

export default OpenBoxFaturas2;
