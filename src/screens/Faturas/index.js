import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { useState } from "react";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import BoxFaturas from "../../components/BoxFaturas";

export default function Faturas({ navigation }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
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
        <View style={[styles.boxMaior, { backgroundColor: "#00A33F" }]}>
          <View style={styles.conteudoLeft}>
            {/* <MaterialIcons
                  name="monetization-on"
                  size={40}
                  color={"white"}
                  style={{ marginRight: 5 }}
                  /> */}
            <Text style={styles.textMaior}>
              CONTRATO: 30_BM_R$_49,90__MIGRACAO
            </Text>
            <Text style={[styles.textMaior, { marginTop: 10 }]}>ID: 56776</Text>
          </View>
          <View style={styles.conteudoRight}>
            <Text
              style={[styles.textMaior, { fontSize: 24, fontWeight: "400" }]}
            >
              R$ 40,90
            </Text>
            <Text style={{ color: "#fff", fontSize: 12, fontWeight: 300 }}>
              em aberto no mês atual
            </Text>
          </View>
        </View>
        {/* 
        ----------------------- CARREGAR
        */}
        {isVisible && (
          <BoxFaturas
            status={"em aberto"}
            periodo1={"28/07/2023"}
            periodo2={"27/08/2023"}
            vencimento={"28/08/2023"}
          />
        )}

        <TouchableOpacity
          style={styles.buttonCarregar}
          onPress={handleToggleVisibility}
        >
          <MaterialIcons name="expand-more" size={24} color={"#05b5f5"} />
          <Text style={{ color: "#05b5f5", fontSize: 18, fontWeight: 300 }}>
            CARREGAR FATURAS
          </Text>
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
    flexDirection: "column",
  },
  boxMaior: {
    minHeight: 150,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#139e3a",

    borderRadius: 4,
    top: -30,
    marginBottom: -25,
    elevation: 10,
  },

  // Conteúdo dentro da BOX do TITULO
  textMaior: {
    color: "#fff",
    fontWeight: 300,
    fontSize: 18,
    // width: 100,
  },
  conteudoRight: { alignItems: "flex-end", width: 60 },
  // ============
  buttonCarregar: { alignItems: "center", marginTop: 5 },
});
