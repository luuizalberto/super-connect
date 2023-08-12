import { StyleSheet, View, TouchableOpacity, Text, Button } from "react-native";
import { Feather } from "@expo/vector-icons";
import Breadcrumb from "../../components/Breadcrumb";

export default function Perfil({ navigation }) {
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
          elevation: 10,
        }}
      >
        {/* <Image style={{ backgroundColor: "#c7c9c8", width: 60, height: 30 }} /> */}
        <TouchableOpacity onPress={openMenu}>
          <Feather name="menu" size={30} color={"black"} />
        </TouchableOpacity>
      </View>
      <Breadcrumb navigation={navigation} atual={"Meus Dados"} />
      <View style={styles.bodyMain}>
        <View style={[styles.boxMaior, { backgroundColor: "#7451cf" }]}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ flexDirection: "column" }}>
              <Text style={{ fontSize: 24, color: "white", fontWeight: 300 }}>
                Meus Dados
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "white",
                  marginTop: 8,
                  fontWeight: 300,
                }}
              >
                Confira e altere seus dados.
              </Text>
            </View>
          </View>
        </View>

        {/* 

            ------------------------
          
          */}
        <View style={styles.bottonsSelect}>
          <TouchableOpacity>
            <Text style={[styles.textBottons]}>MEUS DADOS</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textBottons}>ENDEREÇO</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textBottons}>SENHA</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textBottons}>PRIVACIDADE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3e3e3",
  },
  bodyMain: {
    backgroundColor: "#fff",
    marginTop: 25,
    marginBottom: 10,
    width: "98%",
    padding: 5,
    left: "1%",
    minHeight: 50,
    elevation: 5,
    flexDirection: "column",
    alignItems: "center",
  },
  boxMaior: {
    width: "96%",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#139e3a",
    alignItems: "center",
    borderRadius: 4,
    top: -30,
    marginBottom: -25,
    elevation: 20,
  },
  textbold: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: "#52004F",
    marginTop: 50,
  },
  // ==============
  bottonsSelect: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    marginTop: 8,
  },
  textBottons: {
    fontSize: 12,
    color: "#fff",
    backgroundColor: "#7451cf",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 12,
    paddingBottom: 12,
  },
});
