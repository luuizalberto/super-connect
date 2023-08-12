import { Feather } from "@expo/vector-icons";
import styles from "./style";

import BoxTitle from "../../components/BoxTitle";

import ConteudoFaturas2 from "../../components/ConteudoFaturas2";
import ConteudoContratos from "../../components/ConteudoContratos";
import ConteudoTermos from "../../components/ConteudoTermos";
import SemConteudo from "../../components/SemConteudo";

import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";

export default function Home2({ navigation }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  const faturas = [
    {
      id: "1",
      status: "Em aberto",
      vencimento: "29/07/2023",
      valor: "R$ 49,90",
    },
  ];

  const contracts = [
    {
      id: "1",
      status: "Ativo",
      contrato: "30_MB_R$_49,90_MIGRACAO",
      pago: "28/06/2023",
      data: "05/12/2021",
    },
  ];

  const terms = [
    {
      id: "1",
      status: "Assinado",
      termo: "TERMO COMODATOS COM MULTA RESCISÓRIA",
    },
  ];

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar />
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
      {/* 


                      CORPO DA TELA

       */}

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.bodyMain}>
            <BoxTitle
              icon={"monetization-on"}
              title={"Faturas"}
              color={"#00A33F"}
            />

            <FlatList
              data={faturas}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ConteudoFaturas2
                  key={item.id}
                  status={item.status}
                  vencimento={item.vencimento}
                  valor={item.valor}
                />
              )}
              ListEmptyComponent={() => <SemConteudo title="FATURAS" />}
              nestedScrollEnabled // não pode usar FlatList dentro de ScrollView, essa propriedade resolve esse problema, permitir a rolagem em toda a tela independentemente de está dentro da ScrollView
            />

            <TouchableOpacity
              style={styles.todas}
              onPress={() => navigation.navigate("Faturas")}
            >
              <Feather
                name="arrow-right"
                color={"green"}
                style={{ marginRight: 8 }}
                size={20}
              />
              <Text style={{ fontSize: 14 }}>Ver todas..</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* ---------
      
            
              SEÇÃO CONTRATOS

      -------- */}
        <View>
          <View style={styles.bodyMain}>
            <BoxTitle
              icon={"receipt"}
              title={"Contratos"}
              color={"#A3009E"}
              numero={1}
              textNum={"contratos ativos"}
            />
            <FlatList
              // data={contracts}
              data={[]}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ConteudoContratos
                  key={item.id}
                  status={item.status}
                  contrato={item.contrato}
                  pagoAte={item.pago}
                  dataContrato={item.data}
                />
              )}
              ListEmptyComponent={() => <SemConteudo title="CONTRATOS" />}
              nestedScrollEnabled
            />

            <TouchableOpacity
              style={styles.todas}
              onPress={() => navigation.navigate("Contratos")}
            >
              <Feather
                name="arrow-right"
                color={"purple"}
                style={{ marginRight: 8 }}
                size={20}
              />
              <Text style={{ fontSize: 14 }}>Ver todos..</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* ------------
      



      ------------- */}
        <View>
          <View style={styles.bodyMain}>
            <BoxTitle icon={"receipt"} title={"Termos"} color={"#52004F"} />

            <FlatList
              // data={contracts}
              data={[]}
              keyExtractor={(term) => term.id}
              renderItem={({ term }) => (
                <ConteudoTermos
                  key={term.id}
                  status={term.status}
                  termo={term.termo}
                />
              )}
              ListEmptyComponent={() => <SemConteudo title="TERMOS" />}
              nestedScrollEnabled
            />

            <TouchableOpacity
              style={styles.todas}
              onPress={() => navigation.navigate("Contratos")}
            >
              <Feather
                name="arrow-right"
                color={"purple"}
                style={{ marginRight: 8 }}
                size={20}
              />
              <Text style={{ fontSize: 14 }}>Ver todos..</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
