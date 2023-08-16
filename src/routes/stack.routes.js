import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login";
import Home2 from "../screens/Home2";
import Faturas from "../screens/Faturas";
import Relatorios from "../screens/Relatorios";
import Configuracoes from "../screens/Configuracoes";
import Speedtest from "../screens/Speedtest";
import Conexoes from "../screens/Conexoes";
import Contratos from "../screens/Contratos";
import Perfil from "../screens/Perfil";
import Menu from "../screens/Menu";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      {/* <Stack.Screen name="inicio" component={DrawerRoutes} /> */}
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }} // Ocultar cabeçalho na tela de Login
      />
      <Stack.Screen
        name="Home"
        component={Home2}
        options={{ headerShown: false }} // Ocultar cabeçalho na tela de Home
      />
      <Stack.Screen
        name="Faturas"
        component={Faturas}
        options={{ headerShown: false }} // Ocultar cabeçalho na tela de Home
      />
      <Stack.Screen
        name="Relatorios"
        component={Relatorios}
        options={{ headerShown: false }} // Ocultar cabeçalho na tela de Home
      />
      <Stack.Screen
        name="Configuracoes"
        component={Configuracoes}
        options={{ headerShown: false }} // Ocultar cabeçalho na tela de Home
      />
      <Stack.Screen
        name="SpeedTest"
        component={Speedtest}
        options={{ headerShown: false }} // Ocultar cabeçalho na tela de Home
      />
      <Stack.Screen
        name="Conexoes"
        component={Conexoes}
        options={{ headerShown: false }} // Ocultar cabeçalho na tela de Home
      />
      <Stack.Screen
        name="Contratos"
        component={Contratos}
        options={{ headerShown: false }} // Ocultar cabeçalho na tela de Home
      />
      <Stack.Screen
        name="Perfil"
        component={Perfil}
        options={{ headerShown: false }} // Ocultar cabeçalho na tela de Home
      />
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{ headerShown: false }} // Ocultar cabeçalho na tela de Home
      />
    </Stack.Navigator>
  );
}

// AINDA NAO ESTOU UTLIZANDO ISSO
