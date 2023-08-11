import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import DropdownButton from "../../components/DropdownButton";
import Breadcrumb from "../../components/Breadcrumb";

export default function Relatorios({ navigation }) {
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

      <Breadcrumb navigation={navigation} atual={"Relatórios"} />

      <View style={styles.body}>
        <View style={styles.boxContainer}>
          <View style={styles.boxInterna}>
            <MaterialIcons name="money-off" size={40} />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ color: "#adadad" }}>Relatórios</Text>
              <Text>Quitação de Débitos</Text>
              {/* <TouchableOpacity style={styles.select}>
                <Text style={styles.textselect}>2023</Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  color={"gray"}
                  size={14}
                />
              </TouchableOpacity> */}

              <DropdownButton />
            </View>
          </View>
          <TouchableOpacity>
            <MaterialIcons name="print" size={25} />
          </TouchableOpacity>
        </View>

        {/* ======= */}

        <View style={[styles.boxContainer, { flexDirection: "column" }]}>
          <View style={styles.boxInterna}>
            <MaterialIcons name="phone" size={40} />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ color: "#adadad" }}>Relatórios</Text>
              <Text>Extrato de ligações</Text>
              <TouchableOpacity style={styles.select}>
                <Text style={styles.textselect}>
                  Extrato de Ligações Tarifadas
                </Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  color={"gray"}
                  size={14}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.notfound}>Nenhum ramal encontrado!</Text>
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
  body: {
    justifyContent: "center",
    padding: "1%",
  },
  boxContainer: {
    padding: 25,
    flexDirection: "row",

    justifyContent: "space-between",
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 5,
    elevation: 90,
  },
  boxInterna: {
    flexDirection: "row",
  },
  select: {
    borderBottomWidth: 1,
    borderColor: "#adadad",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textselect: {
    marginTop: 8,

    paddingBottom: 8,
    color: "#8f8f8f",
  },
  notfound: {
    marginTop: 30,
    borderTopWidth: 0.5,
    borderColor: "#adadad",
    paddingTop: 20,
    color: "#8f8f8f",
    textAlign: "center",
  },
});
