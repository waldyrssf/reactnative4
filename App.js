import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Login';
import CadastroScreen from './screens/CadUsuario'
import ListarScreen from './screens/Lista';
import CadastroContatoScreen from './screens/CadContato';
import AlterarExcluirScreen from './screens/AlterarExcluir';

const Stack = createNativeStackNavigator();

function App() {
return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Login" component={LoginScreen} />
<Stack.Screen name="AlterarExcluir" component={AlterarExcluirScreen} />
<Stack.Screen name="CadastroContato" component={CadastroContatoScreen} />
<Stack.Screen name="Listar" component={ListarScreen} />
<Stack.Screen name="Cadastro" component={CadastroScreen} />
</Stack.Navigator>
</NavigationContainer>
);
}

export default App;