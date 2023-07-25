import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // estilização do conteúdo principal Geral
  bodyMain: {
    backgroundColor: "#fff",
    marginTop: 35,
    marginBottom: 10,
    width: "98%",
    padding: 10,
    left: "1%",
    minHeight: 50,
    elevation: 20,
  },

  // =====
  status: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textStatus: {
    textAlign: "right",
    alignItems: "flex-end",
    padding: 4,
    width: 70,
    backgroundColor: "#139e3a",
  },
  vencimento: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  valor: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  // ===========
  buttons: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#139e3a",
    padding: 5,
    borderRadius: 4,
  },
  line: {
    height: 1,
    backgroundColor: "#c7c9c8",
    marginTop: 15,
    left: -7,
    width: "104%",
  },
  todas: {
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;
