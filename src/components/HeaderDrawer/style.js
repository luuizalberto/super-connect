import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 25,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: "#bfbfbf",
    marginBottom: 5,
  },
  boxUser: {
    marginLeft: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#2402cc",
    justifyContent: "center",
    alignItems: "center",
  },
  boxText: {
    marginLeft: 4,
    marginBottom: 10,
  },
  nameUser: {
    color: "#3815e8",
    fontSize: 20,
    textTransform: "uppercase",
    marginBottom: 5,
  },
  verDados: {
    color: "#bfbfbf",
    fontSize: 12,
    textTransform: "uppercase",
  },
  boxIcon: { marginLeft: 35 },
});

export default styles;
