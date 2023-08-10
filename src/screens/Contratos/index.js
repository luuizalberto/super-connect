import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";

import BoxContratos from "../../components/BoxContratos";
import BoxTermos from "../../components/BoxTermos";

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
        <View style={[styles.boxMaior, { backgroundColor: "#A3009E" }]}>
          <View style={styles.conteudoLeft}>
            <Text style={styles.textMaior}>Contratos</Text>
            <Text
              style={[
                styles.textMaior,
                { marginTop: 5, fontSize: 14, fontWeight: 300, width: "90%" },
              ]}
            >
              gerencie seus contratos.
            </Text>
          </View>
          <View style={styles.conteudoRight}>
            <Text style={[styles.textMaior, { fontSize: 22 }]}>1</Text>
            <Text
              style={{
                color: "#fff",
                fontSize: 14,
                fontWeight: 300,
                textAlign: "right",
              }}
            >
              contratos ativos listados
            </Text>
          </View>
        </View>

        <BoxContratos />
      </View>
      {/* 
      
      
      
      */}
      <View style={styles.bodyMain}>
        <View style={[styles.boxMaior, { backgroundColor: "#61025e" }]}>
          <View style={styles.conteudoLeft}>
            <Text style={styles.textMaior}>Termos</Text>
            <Text
              style={[
                styles.textMaior,
                { marginTop: 5, fontSize: 14, fontWeight: 300, width: "90%" },
              ]}
            >
              gerencie seus termos.
            </Text>
          </View>
          <View style={styles.conteudoRight}>
            <Text style={[styles.textMaior, { fontSize: 22 }]}>1</Text>
            <Text
              style={{
                color: "#fff",
                fontSize: 14,
                fontWeight: 300,
                textAlign: "right",
              }}
            >
              termos listados
            </Text>
          </View>
        </View>
        {/* 
        ----------------------- CARREGAR
        */}

        <BoxTermos
          status={"assinado"}
          descricao={"TERMO COMODATOS COM MULTA RECISÓRIA"}
        />
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
    borderRadius: 4,
    top: -30,
    marginBottom: -25,
    elevation: 10,
  },

  // Conteúdo dentro da BOX do TITULO
  textMaior: {
    color: "#fff",
    fontSize: 22,
    // width: 100,
  },
  conteudoRight: { width: "32%", alignItems: "flex-end" },
});
