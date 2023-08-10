import { MaterialIcons } from "@expo/vector-icons";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import ButtonsTermos from "../ButtonsTermos";

// import { Container } from './styles';

const BoxTermos = ({ status, descricao }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <View>
      <View style={styles.boxInicialAberta}>
        <TouchableOpacity onPress={handleToggleVisibility}>
          <View style={styles.boxStatus}>
            <View style={styles.statusAndArrow}>
              <MaterialIcons name="expand-more" size={30} color={"#13a303"} />
              <Text style={[styles.textTitle]}>Status</Text>
            </View>
            <Text
              style={[
                styles.boxHandleStatus,
                { fontSize: 14, fontWeight: 300 },
              ]}
            >
              {status}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.boxVencimento}>
          <Text style={[styles.textTitle]}>Descrição:</Text>
          <Text style={{ fontSize: 14, fontWeight: 300 }}>{descricao}</Text>
        </View>
        {isVisible && <ButtonsTermos />}
      </View>
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
    marginBottom: 15,
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

export default BoxTermos;
