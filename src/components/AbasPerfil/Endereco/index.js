import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState } from "react";
import ButtonCancelar from "../ButtonCancelar";

const Endereco = ({
  cep,
  endereco,
  num,
  bairro,
  complemento,
  referencia,
  estado,
  cidade,
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
        <Text style={styles.textInput}>CEP (obrigatório)</Text>
        <TextInput
          style={styles.input}
          placeholder="49470-000"
          clearButtonMode="while-editing" // habilita botao de limpar tudo no IOS
          defaultValue={cep}
          maxLength={9}
          readOnly={isEditar} // desabilita edição
          keyboardType="numeric"
          placeholderTextColor={"#e0e0e0"}
        />
      </View>
      <View style={styles.singleBoxInput}>
        <Text style={styles.textInput}>Endereço (obrigatório)</Text>
        <TextInput
          style={styles.input}
          placeholder="Pista Da Granja"
          clearButtonMode="while-editing" // habilita botao de limpar tudo no IOS
          defaultValue={endereco}
          maxLength={30}
          readOnly={isEditar}
          placeholderTextColor={"#e0e0e0"}
        />
      </View>
      <View style={styles.singleBoxInput}>
        <Text style={styles.textInput}>Número (obrigatório)</Text>
        <TextInput
          style={styles.input}
          placeholder="114"
          clearButtonMode="while-editing" // habilita botao de limpar tudo no IOS
          defaultValue={num}
          maxLength={6}
          readOnly={isEditar}
          keyboardType="numeric"
          placeholderTextColor={"#e0e0e0"}
        />
      </View>
      <View style={styles.singleBoxInput}>
        <Text style={styles.textInput}>Bairro (obrigatório)</Text>
        <TextInput
          style={styles.input}
          placeholder="COLÔNIA TREZE"
          clearButtonMode="while-editing" // habilita botao de limpar tudo no IOS
          defaultValue={bairro}
          maxLength={20}
          readOnly={isEditar}
          placeholderTextColor={"#e0e0e0"}
        />
      </View>
      <View style={styles.singleBoxInput}>
        <Text style={styles.textInput}>Complemento</Text>
        <TextInput
          style={styles.input}
          placeholder="FUNCIONÁRIA"
          clearButtonMode="while-editing" // habilita botao de limpar tudo no IOS
          defaultValue={complemento}
          maxLength={30}
          readOnly={isEditar}
          placeholderTextColor={"#e0e0e0"}
        />
      </View>
      <View style={[styles.singleBoxInput, { marginTop: 15 }]}>
        {/* <Text style={styles.textInput}>Celular</Text> */}
        <TextInput
          style={styles.input}
          placeholder="Referência"
          clearButtonMode="while-editing" // habilita botao de limpar tudo no IOS
          defaultValue={referencia}
          maxLength={15}
          readOnly={isEditar}
          placeholderTextColor={"#e0e0e0"}
        />
      </View>
      <View style={styles.singleBoxInput}>
        <Text style={styles.textInput}>Estado (obrigatório)</Text>
        <TextInput
          style={styles.input}
          placeholder="SE"
          clearButtonMode="while-editing" // habilita botao de limpar tudo no IOS
          defaultValue={estado}
          maxLength={15}
          readOnly={isEditar}
          placeholderTextColor={"#e0e0e0"}
        />
      </View>
      <View style={styles.singleBoxInput}>
        <Text style={styles.textInput}>Cidade (obrigatório)</Text>
        <TextInput
          style={styles.input}
          placeholder="Lagarto"
          clearButtonMode="while-editing" // habilita botao de limpar tudo no IOS
          defaultValue={cidade}
          maxLength={15}
          readOnly={isEditar}
          placeholderTextColor={"#e0e0e0"}
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

export default Endereco;
