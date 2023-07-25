import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerRoutes from "./drawer.routes";
import Login from "../screens/Login";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="inicio" component={DrawerRoutes} /> */}
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }} // Ocultar cabeçalho na tela de Login
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }} // Ocultar cabeçalho na tela de Home
      />
    </Stack.Navigator>
  );
}

// AINDA NAO ESTOU UTLIZANDO ISSO
