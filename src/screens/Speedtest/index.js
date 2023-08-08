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
      <View style={styles.bodyMain}>
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
        <Text style={styles.textbold}>
          Antes de medir a velocidade da sua banda, siga estas dicas para que o
          resultado seja o mais preciso possível:
        </Text>

        {/* 

            ------------------------
          
          */}

        <View style={styles.boxtutorial}>
          <View style={styles.textTutorial}>
            <MaterialIcons
              name="settings-input-hdmi"
              size={16}
              color={"#8f8f8f"}
              style={{ marginRight: 4, marginTop: 4 }}
            />
            <Text style={{ color: "#8f8f8f", fontSize: 16, fontWeight: 300 }}>
              Faça o teste em um computador conectado à internet por meio de um
              cabo de rede
            </Text>
          </View>
          <View style={styles.textTutorial}>
            <MaterialIcons
              name="border-outer"
              size={16}
              color={"#8f8f8f"}
              style={{ marginRight: 4 }}
            />
            <Text style={{ color: "#8f8f8f", fontSize: 16, fontWeight: 300 }}>
              Conecte diretamente na entrada do provedor
            </Text>
          </View>
          <View style={styles.textTutorial}>
            <MaterialIcons
              name="update"
              size={16}
              color={"#8f8f8f"}
              style={{ marginRight: 4 }}
            />
            <Text style={{ color: "#8f8f8f", fontSize: 16, fontWeight: 300 }}>
              Interrompa as atualizações
            </Text>
          </View>
          <View style={styles.textTutorial}>
            <MaterialIcons
              name="loop"
              size={16}
              color={"#8f8f8f"}
              style={{ marginRight: 4 }}
            />
            <Text style={{ color: "#8f8f8f", fontSize: 16, fontWeight: 300 }}>
              Repita o teste
            </Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={styles.button}>
              <Text style={{ color: "#fff", fontSize: 12 }}>ENTENDIDO</Text>
            </TouchableOpacity>
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
  bodyMain: {
    backgroundColor: "#fff",
    marginTop: 25,
    marginBottom: 10,
    width: "98%",
    padding: 15,
    left: "1%",
    minHeight: 50,
    elevation: 20,
    flexDirection: "column",
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
  textbold: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: "#52004F",
    marginTop: 50,
  },
  boxtutorial: { marginTop: 40 },
  textTutorial: { flexDirection: "row", width: "95%", marginBottom: 20 },
  button: {
    width: 100,
    height: 30,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    marginTop: 35,
    marginBottom: 5,
    elevation: 8,
  },
});
