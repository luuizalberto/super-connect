import { MaterialIcons } from "@expo/vector-icons";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import ButtonsFaturas from "../ButtonsFaturas";

// import { Container } from './styles';

const BoxFaturas = ({ status, vencimento, periodo1, periodo2 }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <View>
      <View style={styles.boxInicialAberta}>
        <TouchableOpacity
          style={styles.boxStatus}
          onPress={handleToggleVisibility}
        >
          <View style={styles.statusAndArrow}>
            <MaterialIcons name="expand-more" size={30} color={"#13a303"} />
            <Text style={[styles.textTitle]}>Status</Text>
          </View>
          <Text
            style={[styles.boxHandleStatus, { fontSize: 14, fontWeight: 300 }]}
          >
            {status}
          </Text>
        </TouchableOpacity>
        <View style={styles.boxPeriodo}>
          <Text style={[styles.textTitle]}>Periodo:</Text>
          <Text style={{ fontSize: 14, fontWeight: 300 }}>
            de {periodo1} até {periodo2}
          </Text>
        </View>
        <View style={styles.boxVencimento}>
          <Text style={[styles.textTitle]}>Vencimento:</Text>
          <Text style={{ fontSize: 14, fontWeight: 300 }}>{vencimento}</Text>
        </View>

        {isVisible && <ButtonsFaturas valor={"49,90"} />}
      </View>

      {/* <View style={styles.titlesTable}>
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
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  boxInicialAberta: {
    padding: 4,
    borderBottomWidth: 0.2,
    paddingBottom: 15,
    backgroundColor: "#f0f0f0",
  },
  statusAndArrow: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: -7,
  },
  boxStatus: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 25,
  },
  boxPeriodo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  boxVencimento: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  // --------------------------------------------------------

  //---------
  titlesTable: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 10,
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 14,
  },

  // --------------

  // Botão status
  boxHandleStatus: {
    backgroundColor: "#0EA300",
    color: "white",
    padding: 4,
    borderRadius: 3,
  },
});

export default BoxFaturas;
