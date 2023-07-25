import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerform: {
    width: "80%",
    marginTop: 90,
  },
  input: {
    width: "100%",
    height: 50,
    borderBottomWidth: 1,
    marginBottom: 25,
  },
  checkbox: {
    flexDirection: "row",
    marginBottom: 25,
    justifyContent: "center",
  },
  button: {
    height: 45,
    backgroundColor: "blue",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  text: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default styles;
