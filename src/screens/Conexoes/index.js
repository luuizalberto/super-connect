import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";

export default function Speedtest({ navigation }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          height: 50,
          backgroundColor: "#fff",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingLeft: 15,
          paddingRight: 15,
          elevation: 20,
        }}
      >
        {/* <Image style={{ backgroundColor: "#c7c9c8", width: 60, height: 30 }} /> */}
        <TouchableOpacity onPress={openMenu}>
          <Feather name="menu" size={30} color={"black"} />
        </TouchableOpacity>
      </View>
      <View style={styles.boxContainer}>
        <View style={styles.bodyMain}>
          <View style={[styles.boxMaior]}>
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 300,
                  color: "white",
                  marginBottom: 3,
                }}
              >
                Conexões
              </Text>
              <Text style={{ fontSize: 12, color: "white" }}>
                Gerencie os seus dispositivos
              </Text>
            </View>
          </View>

          <View style={styles.boxGeral}>
            <Text style={styles.textGeral}>GERAL</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                marginTop: 20,
                textAlign: "center",
                fontSize: 16,
                color: "#0054b5",
                alignItems: "center",
                textAlign: "center",
                marginBottom: 5,
                width: "80%",
              }}
            >
              Ops! Parece que você não possui dispositivos 😕
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxContainer: { alignItems: "center" },
  bodyMain: {
    backgroundColor: "#fff",
    marginTop: 25,
    marginBottom: 10,
    width: "91%",
    padding: 15,
    minHeight: 50,
    elevation: 20,
  },
  boxMaior: {
    paddingTop: 15,
    paddingBottom: 8,
    paddingLeft: 30,
    flexDirection: "row",
    backgroundColor: "#2D80C4",
    alignItems: "center",
    borderRadius: 4,
    top: -30,
    marginBottom: -15,
    elevation: 30,
  },
  boxGeral: { alignItems: "center", marginBottom: 15 },
  textGeral: {
    width: "96%",
    padding: 15,
    backgroundColor: "#2D80C4",
    color: "#fff",
  },
});
