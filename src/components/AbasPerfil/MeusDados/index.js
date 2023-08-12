import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState } from "react";
import ButtonCancelar from "../ButtonCancelar";

const MeusDados = ({
  name,
  apelido,
  dataNasc,
  tel,
  celular,
  telComercial,
  ramal,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const [isEditar, setIsEditar] = useState(true);

  const handleToggleEditarInput = () => {
    setIsEditar(!isEditar);
  };
  return (
    <View style={styles.container}>
      <View style={styles.singleBoxInput}>
        <Text style={styles.textInput}>Nome completo (obrigatório)</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          clearButtonMode="while-editing" // habilita botao de limpar tudo no IOS
          defaultValue={name}
          maxLength={50}
          readOnly={isEditar} // desabilita edição
          placeholderTextColor={"#e0e0e0"}
        />
      </View>
      <View style={styles.singleBoxInput}>
        <Text style={styles.textInput}>Como gostaria de ser chamado</Text>
        <TextInput
          style={styles.input}
          placeholder="Como gostaria de ser chamado"
          clearButtonMode="while-editing" // habilita botao de limpar tudo no IOS
          defaultValue={apelido}
          maxLength={50}
          readOnly={isEditar}
          placeholderTextColor={"#e0e0e0"}
        />
      </View>
      <View style={styles.singleBoxInput}>
        <Text style={styles.textInput}>Data de nascimento</Text>
        <TextInput
          style={styles.input}
          placeholder="15/08/1998"
          clearButtonMode="while-editing" // habilita botao de limpar tudo no IOS
          defaultValue={dataNasc}
          maxLength={10}
          readOnly={isEditar}
          keyboardType="numeric"
          placeholderTextColor={"#e0e0e0"}
        />
      </View>
      <View style={styles.singleBoxInput}>
        <Text style={styles.textInput}>Telefone (obrigatório)</Text>
        <TextInput
          style={styles.input}
          placeholder="(79) 8489-2211"
          clearButtonMode="while-editing" // habilita botao de limpar tudo no IOS
          defaultValue={tel}
          maxLength={14}
          readOnly={isEditar}
          keyboardType="numeric"
          placeholderTextColor={"#e0e0e0"}
        />
      </View>
      <View style={styles.singleBoxInput}>
        <Text style={styles.textInput}>Celular</Text>
        <TextInput
          style={styles.input}
          placeholder="(79) 99845-5874"
          clearButtonMode="while-editing" // habilita botao de limpar tudo no IOS
          defaultValue={celular}
          maxLength={15}
          readOnly={isEditar}
          keyboardType="numeric"
          placeholderTextColor={"#e0e0e0"}
        />
      </View>
      <View style={[styles.singleBoxInput, { marginTop: 15 }]}>
        {/* <Text style={styles.textInput}>Celular</Text> */}
        <TextInput
          style={styles.input}
          placeholder="Telefone Comercial"
          clearButtonMode="while-editing" // habilita botao de limpar tudo no IOS
          defaultValue={telComercial}
          maxLength={15}
          readOnly={isEditar}
          placeholderTextColor={"#e0e0e0"}
          keyboardType="numeric"
        />
      </View>
      <View style={[styles.singleBoxInput, { marginTop: 15 }]}>
        {/* <Text style={styles.textInput}>Celular</Text> */}
        <TextInput
          style={styles.input}
          placeholder="Ramal"
          clearButtonMode="while-editing" // habilita botao de limpar tudo no IOS
          defaultValue={ramal}
          maxLength={15}
          readOnly={isEditar}
          placeholderTextColor={"#e0e0e0"}
          keyboardType="numeric"
        />
      </View>

      {/* 
        ----------------------------
      */}

      <View style={styles.atualizar}>
        <TouchableOpacity
          style={styles.bottonAtualizar}
          onPress={() => {
            handleToggleEditarInput();
            handleToggleVisibility();
          }}
        >
          <Text style={styles.textAtualizar}>ATUALIZAR DADOS CADASTRAIS</Text>
        </TouchableOpacity>
        {isVisible && (
          <TouchableOpacity
            onPress={() => {
              handleToggleEditarInput();
              handleToggleVisibility();
            }}
          >
            <ButtonCancelar />
          </TouchableOpacity>
        )}
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
  },
  textAtualizar: { color: "#fff", fontSize: 12 },
});

export default MeusDados;
