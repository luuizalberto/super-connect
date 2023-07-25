import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
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
      <View style={styles.bodyMain}>
        <TouchableOpacity>
          <View style={[styles.boxMaior, { backgroundColor: "#52004F" }]}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialIcons
                name="network-check"
                size={40}
                color={"white"}
                style={{ marginRight: 5 }}
              />
              <View style={{ flexDirection: "column" }}>
                <Text style={{ fontSize: 20, color: "white" }}>Speed Test</Text>
                <Text style={{ fontSize: 10, color: "white" }}>
                  Teste a velocidade da sua conexão em tempo real
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyMain: {
    backgroundColor: "#fff",
    marginTop: 25,
    marginBottom: 10,
    width: "98%",
    padding: 15,
    left: "1%",
    minHeight: 50,
    elevation: 20,
  },
  boxMaior: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#139e3a",
    alignItems: "center",
    borderRadius: 4,
    top: -30,
    marginBottom: -25,
    elevation: 10,
  },
});
