import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";

const DropdownButton = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleDropdownChange = (itemValue) => {
    setSelectedValue(itemValue);
  };

  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderColor: "#adadad",
        width: 200,
        height: 40,
      }}
    >
      <Picker
        selectedValue={selectedValue}
        style={{
          height: 50,
          width: "100%",
          color: "#8f8f8f",
        }}
        onValueChange={handleDropdownChange}
      >
        <Picker.Item label="2023" value="2023" style={{ fontSize: 14 }} />
        <Picker.Item label="2022" value="2022" style={{ fontSize: 14 }} />
        <Picker.Item label="2021" value="2021" style={{ fontSize: 14 }} />
        <Picker.Item label="2020" value="2020" style={{ fontSize: 14 }} />
        <Picker.Item label="2019" value="2019" style={{ fontSize: 14 }} />
        <Picker.Item label="2018" value="2018" style={{ fontSize: 14 }} />
        {/* Adicione mais itens conforme necessário */}
      </Picker>
      {/* <TouchableOpacity
        style={{
          backgroundColor: "#007bff",
          padding: 10,
          borderRadius: 5,
          marginTop: 10,
        }}
        onPress={() => {
          // Aqui você pode tratar o valor selecionado
          // por exemplo, enviar para um servidor ou realizar alguma ação
          console.log("Valor selecionado:", selectedValue);
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>Enviar</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default DropdownButton;
