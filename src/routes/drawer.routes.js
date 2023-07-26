import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Faturas from "../screens/Faturas";
import Relatorios from "../screens/Relatorios";
import Configuracoes from "../screens/Configuracoes";
import Speedtest from "../screens/Speedtest";
import Conexoes from "../screens/Conexoes";
import Contratos from "../screens/Contratos";
import { SafeAreaView, StyleSheet } from "react-native";
import HeaderDrawer from "../components/HeaderDrawer";

// import Login from "../screens/Login";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="Login"
      drawerContent={(props) => {
        return (
          <SafeAreaView style={styles.container}>
            <HeaderDrawer />
            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
      screenOptions={{
        drawerPosition: "right",
        headerShown: false,
        drawerLabelStyle: { marginLeft: -20 },
        drawerItemStyle: { marginBottom: -5 },
        drawerInactiveTintColor: "#bfbfbf",
        drawerActiveBackgroundColor: "#fff",
        headerStyle: {
          backgroundColor: "#b6bfb8",
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={40} />
          ),
          drawerLabel: "INÍCIO",
        }}
      />
      <Drawer.Screen
        name="Faturas"
        component={Faturas}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="attach-money" color={color} size={40} />
          ),
          drawerLabel: "FATURAS",
        }}
      />
      <Drawer.Screen
        name="Contratos"
        component={Contratos}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="receipt" color={color} size={40} />
          ),
          drawerLabel: "CONTRATOS",
        }}
      />
      <Drawer.Screen
        name="Conexoes"
        component={Conexoes}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="router" color={color} size={40} />
          ),
          drawerLabel: "CONEXÕES",
        }}
      />

      <Drawer.Screen
        name="Relatorios"
        component={Relatorios}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="article" color={color} size={40} />
          ),
          drawerLabel: "RELATÓRIOS",
        }}
      />

      <Drawer.Screen
        name="Configuracoes"
        component={Configuracoes}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="settings" color={color} size={40} />
          ),
          drawerLabel: "CONFIGURAÇÕES",
        }}
      />
      <Drawer.Screen
        name="Speedtest"
        component={Speedtest}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="network-check" color={color} size={40} />
          ),
          drawerLabel: "SPEED TEST",
        }}
      />
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{ swipeEnabled: false, drawerLabel: `  aqui` }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: { padding: 25 },
});
