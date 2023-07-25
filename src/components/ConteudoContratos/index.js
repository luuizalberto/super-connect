import { MaterialIcons } from "@expo/vector-icons";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import OpenBoxContratos from "../OpenBoxContratos";

// import { Container } from './styles';

const ConteudoContratos = ({ status, contrato, pagoAte, dataContrato }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View>
      <View style={styles.titlesTable}>
        <Text style={[styles.textTitle]}>Status</Text>
        <Text style={[styles.textTitle]}>Contrato</Text>
        <Text style={[styles.textTitle]}>Pago até</Text>
        <Text allowFontScaling={true} style={[styles.textTitle]}>
          Data do Contrato
        </Text>
        <Text style={[styles.textTitle, { marginLeft: 25 }]}>Ações</Text>
      </View>
      <View style={styles.bodyTable}>
        <Text
          style={[styles.boxHandleStatus, { fontSize: 12, marginRight: 25 }]}
        >
          {status}
        </Text>
        <Text
          allowFontScaling={true}
          style={[styles.textBody, { width: 45, marginRight: 5 }]}
        >
          {contrato}
        </Text>
        <Text style={styles.textBody}>{pagoAte}</Text>
        <Text style={styles.textBody}>{dataContrato}</Text>
        <View>
          <TouchableOpacity
            style={styles.selectAcao}
            onPress={handleToggleVisibility}
          >
            <Text style={{ color: "white", fontSize: 10 }}>
              Selecione uma ação
            </Text>
            <MaterialIcons name="arrow-drop-down" color={"white"} size={14} />
          </TouchableOpacity>
          {!isVisible && <OpenBoxContratos />}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Table Title ---------
  titlesTable: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    paddingLeft: 5,
    paddingRight: 10,
  },
  textTitle: {
    marginRight: 15,
    fontWeight: "bold",
    fontSize: 11,
    width: 50,
    textAlign: "center",
  },
  bodyTable: {
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 13,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: "#f0f0f0",
    borderBottomWidth: 0.2,
    borderColor: "#b0b0b0",
  },
  textBody: {
    color: "#8f8f8f",
    fontSize: 10,
    width: 70,
    textAlign: "center",
  },
  // --------------

  // Botão status
  boxHandleStatus: {
    backgroundColor: "#0EA300",
    color: "white",
    padding: 4,
    borderRadius: 3,
  },

  // botão de seleção
  selectAcao: {
    alignItems: "center",
    fontSize: 10,
    color: "white",
    backgroundColor: "#949494",
    padding: 4,
    paddingRight: 0,
    flexDirection: "row",
    marginRight: -5,
  },
});

export default ConteudoContratos;
