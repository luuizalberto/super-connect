import { MaterialIcons } from "@expo/vector-icons";
import { Text, View, StyleSheet } from "react-native";

// import { Container } from './styles';

const ConteudoTermos = ({ status, termo }) => {
  return (
    <View>
      <View style={styles.titlesTable}>
        <Text style={[styles.textTitle]}>Status</Text>
        <Text style={[styles.textTitle]}>Termo</Text>
        <Text style={[styles.textTitle, { marginLeft: "45%" }]}>Ações</Text>
      </View>
      <View style={styles.bodyTable}>
        <Text
          style={[styles.boxHandleStatus, { fontSize: 12, marginRight: 20 }]}
        >
          {status}
        </Text>

        <Text style={styles.textBody}>{termo}</Text>
        {/*
         <View style={styles.selectAcao}>                    --- DESABILITADO ---
          <Text style={{ color: "white", fontSize: 10 }}>
            Selecione uma ação
          </Text>
          <MaterialIcons name="arrow-drop-down" color={"white"} size={14} />
        </View> 
        */}
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
    paddingLeft: 18,
    paddingRight: 10,
  },
  textTitle: {
    marginRight: 25,
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
    width: 235,
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

export default ConteudoTermos;
