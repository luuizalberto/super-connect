import {
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Checkbox } from "expo-checkbox";
import { useState } from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const [isChecked, setCheched] = useState(false);

  const navigation = useNavigation();

  const handleEntrarPress = () => {
    navigation.navigate("Home");
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image
        style={{ width: 150, height: 60 }}
        source={require("../../../assets/LOGO-SUPER.png")}
      />
      <View style={styles.containerform}>
        <TextInput
          style={styles.input}
          placeholder="CPF/CNPJ"
          onChangeText={() => {}}
          keyboardType="numeric"
          inputMode="numeric"
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
