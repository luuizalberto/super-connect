import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Senha = ({ senhaAtual, senhaNova, senhaNovaConfir }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.singleBoxInput, { marginTop: 15 }]}>
        <TextInput
          style={styles.input}
          placeholder="Digite a senha atual"
          clearButtonMode="while-editing" // habilita botao de limpar tudo no IOS
          defaultValue={senhaAtual}
          maxLength={30}
          placeholderTextColor={"#bdbdbd"}
          textContentType="password"
        />
      </View>
      <View style={[styles.singleBoxInput, { marginTop: 15 }]}>
        <TextInput
          style={styles.input}
          placeholder="Digite a nova senha"
          clearButtonMode="while-editing" // habilita botao de limpar tudo no IOS
          defaultValue={senhaNova}
          maxLength={30}
          placeholderTextColor={"#bdbdbd"}
          textContentType="newPassword"
        />
        <Text style={{ fontSize: 12, color: "#bdbdbd", lineHeight: 20 }}>
          DICA: Uma senha forte é composta obrigatoriamente por no mínimo 8
          caracteres sendo letras maiúsculas, minúsculas e números.
          Opcionalmente adicione caracteres especiais para deixá-la mais forte.
        </Text>
      </View>
      <View style={[styles.singleBoxInput, { marginTop: 15 }]}>
        <TextInput
          style={styles.input}
          placeholder="Confirme a nova senha"
          clearButtonMode="while-editing" // habilita botao de limpar tudo no IOS
          defaultValue={senhaNovaConfir}
          maxLength={30}
          placeholderTextColor={"#bdbdbd"}
          textContentType="password"
        />
      </View>

      {/* 
        ----------------------------
      */}

      <View style={styles.atualizar}>
        <TouchableOpacity style={styles.bottonAtualizar}>
          <Text style={styles.textAtualizar}>ATUALIZAR SENHA</Text>
          <MaterialIcons name="check" color={"#fff"} size={16} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 30, width: "100%" },
  singleBoxInput: { marginBottom: 15 },
  textInput: {
    fontWeight: 300,
    fontSize: 10,
    color: "#7451cf",
    marginBottom: 5,
  },
  input: {
    color: "#ababab",
    fontSize: 16,
    paddingBottom: 8,
    borderBottomColor: "#919191",
    borderBottomWidth: 0.5,
    textTransform: "uppercase",
  },
  //   -----------
  atualizar: {
    marginTop: 30,
    marginBottom: 5,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  bottonAtualizar: {
    backgroundColor: "#7451cf",
    borderRadius: 4,
    padding: 12,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: "row",
  },
  textAtualizar: { color: "#fff", fontSize: 12 },
});

export default Senha;
