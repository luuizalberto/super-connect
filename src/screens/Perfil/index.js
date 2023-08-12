import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import Breadcrumb from "../../components/Breadcrumb";
import MeusDados from "../../components/AbasPerfil/MeusDados";

export default function Perfil({ navigation }) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  const [isVisible, setIsVisible] = useState(false);
  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // const [activeButton, setActiveButton] = useState("MEUS DADOS");

  // const handleButtonPress = (buttonText) => {
  //   if (activeButton !== buttonText) {
  //     setActiveButton(buttonText);
  //   }
  // };

  const [activeBox, setActiveBox] = useState(null);

  const handleBoxPress = (boxName) => {
    setActiveBox(boxName);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
            <TouchableOpacity
              onPress={() => handleBoxPress("MEUS DADOS")}
              style={[
                styles.boxButton,
                activeBox === "MEUS DADOS" && styles.activeBox,
              ]}
              activeOpacity={1}
            >
              <Text
                style={[
                  styles.textBottons,
                  activeBox === "MEUS DADOS" && styles.activeBoxText,
                ]}
              >
                MEUS DADOS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleBoxPress("ENDEREÇO")}
              style={[
                styles.boxButton,
                activeBox === "ENDEREÇO" && styles.activeBox,
              ]}
              activeOpacity={1}
            >
              <Text
                style={[
                  styles.textBottons,
                  activeBox === "ENDEREÇO" && styles.activeBoxText,
                ]}
              >
                ENDEREÇO
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleBoxPress("SENHA")}
              style={[
                styles.boxButton,
                activeBox === "SENHA" && styles.activeBox,
              ]}
              activeOpacity={1}
            >
              <Text
                style={[
                  styles.textBottons,
                  activeBox === "SENHA" && styles.activeBoxText,
                ]}
              >
                SENHA
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleBoxPress("PRIVACIDADE")}
              style={[
                styles.boxButton,
                activeBox === "PRIVACIDADE" && styles.activeBox,
              ]}
              activeOpacity={1}
            >
              <Text
                style={[
                  styles.textBottons,
                  activeBox === "PRIVACIDADE" && styles.activeBoxText,
                ]}
              >
                PRIVACIDADE
              </Text>
            </TouchableOpacity>
          </View>
          {!isVisible && (
            <MeusDados
              name={"debora dos santos araujo"}
              apelido={"debora dos santos araujo"}
              dataNasc={"15/08/1998"}
              tel={"(79) 8489-2211"}
              celular={"(79) 99845-5874"}
            />
          )}
        </View>
      </ScrollView>
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
  boxButton: {
    backgroundColor: "#7451cf",
  },
  activeBox: {
    opacity: 0.7,
  },
  textBottons: {
    fontSize: 12,
    color: "#fff",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 12,
    paddingBottom: 12,
    textTransform: "uppercase",
  },
  activeButton: {
    backgroundColor: "red",
  },
});
