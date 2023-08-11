import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import Breadcrumb from "../../components/Breadcrumb";

export default function Home({ navigation }) {
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
      <Breadcrumb navigation={navigation} atual={"Configurações"} />

      <View style={styles.boxContainer}>
        <View style={styles.boxInterna}>
          <MaterialIcons name="payment" size={60} color={"#8f8f8f"} />
          <Text
            style={{
              fontSize: 18,
              color: "#8f8f8f",
              marginTop: 8,
              width: 300,
              marginLeft: 10,
            }}
          >
            Configurações de pagamento recorrente
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#8f8f8f",
              marginTop: 8,
              width: 260,
              lineHeight: 20,
              marginLeft: 10,
              paddingBottom: 20,
              borderBottomWidth: 0.2,
              borderColor: "#8f8f8f",
            }}
          >
            Marque os contratos que deseja cancelar a cobrança recorrente :
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#8f8f8f",
              textAlign: "center",
              marginTop: 20,
              width: 260,
              lineHeight: 20,
              marginLeft: 10,
              paddingBottom: 20,
              borderBottomWidth: 0.2,
              borderColor: "#8f8f8f",
            }}
          >
            Nenhum contrato com cobrança recorrente foi encontrado!
          </Text>
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
  boxInterna: {
    maxWidth: "95%",
    flexDirection: "column",
    padding: 25,
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 5,
    elevation: 90,
  },
});
