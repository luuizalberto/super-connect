import {
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Checkbox } from "expo-checkbox";
import { useState } from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const [isChecked, setCheched] = useState(false);
  const [cpfCnpj, setCpfCnpj] = useState(""); // Adicione um estado para o valor do CPF/CNPJ

  const navigation = useNavigation();

  const handleEntrarPress = () => {
    // Remova qualquer caracter não numérico do CPF/CNPJ digitado

    // Verifique se o valor digitado é um CPF ou CNPJ válido
    if (cpfCnpj.length === 11 || cpfCnpj.length === 14) {
      console.log("CPF válido:", setCpfCnpj);
      navigation.navigate("Home");
    } else {
      alert("CPF/CNPJ inválido");
    }
  };

  return (
    <KeyboardAvoidingView
      enable={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Image
        style={{ width: 150, height: 60 }}
        source={require("../../../assets/LOGO-SUPER.png")}
      />
      <View style={styles.containerform}>
        <TextInput
          style={styles.input}
          placeholder="CPF/CNPJ"
          onChangeText={setCpfCnpj} // Atualiza o valor do CPF/CNPJ no estado
          keyboardType="numeric"
          inputMode="numeric"
          maxLength={14}
          // contextMenuHidden
        />
        <View style={styles.checkbox}>
          <Checkbox
            value={isChecked}
            color={"blue"}
            onValueChange={setCheched}
          />
          <Text style={{ marginLeft: 8 }}>Matenha-me conectado</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleEntrarPress}>
          <Text style={{ color: "#fff" }}>ENTRAR</Text>
        </TouchableOpacity>
        <View style={styles.text}>
          <Text>Novo por aqui?</Text>
          <TouchableOpacity>
            <Text style={{ marginLeft: 5, fontWeight: "bold" }}>
              Crie uma conta
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
