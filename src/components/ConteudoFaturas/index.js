import { MaterialIcons } from "@expo/vector-icons";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import OpenBoxFaturas from "../OpenBoxFaturas";

// import { Container } from './styles';

const ConteudoFaturas = ({ status, vencimento, valor }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <View>
      <View style={styles.titlesTable}>
        <Text style={[styles.textTitle]}>Status</Text>
        <Text style={[styles.textTitle]}>Vencimento</Text>
        <Text style={[styles.textTitle]}>Valor</Text>

        <Text style={[styles.textTitle, { marginLeft: 45 }]}>Ações</Text>
      </View>
      <View style={styles.bodyTable}>
        <Text
          style={[styles.boxHandleStatus, { fontSize: 12, marginRight: 20 }]}
        >
          {status}
        </Text>

        <Text allowFontScaling={true} style={styles.textBody}>
          {vencimento}
        </Text>
        <Text style={[styles.textBody, { marginRight: 10 }]}>{valor}</Text>
        <View>
          <TouchableOpacity onPress={handleToggleVisibility}>
            <View style={styles.selectAcao}>
              <Text style={{ color: "white", fontSize: 11 }}>
                Selecione uma ação
              </Text>
              <MaterialIcons name="arrow-drop-down" color={"white"} size={14} />
            </View>
          </TouchableOpacity>
          {isVisible && <OpenBoxFaturas />}
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
    paddingLeft: 30,
    paddingRight: 10,
  },
  textTitle: {
    marginRight: 35,
    fontWeight: "bold",
    fontSize: 11,
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
    marginRight: 30,
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
    width: 120,
    alignItems: "center",
    color: "white",
    backgroundColor: "#949494",
    padding: 4,
    paddingRight: 0,
    flexDirection: "row",
    marginLeft: 15,
    borderRadius: 4,
  },

  // COMPONENTE
});

export default ConteudoFaturas;
