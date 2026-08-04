import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Login } from '../pages/Login/Login';
import { ListaOs } from '../pages/ListaOs/ListaOs';
import { CriarOs } from '../pages/CriarOs/CriarOs';
import { Notificacoes } from '../pages/Notificacoes/Notificacoes';
import { Perfil } from '../pages/Perfil/Perfil';

const RootStack = createNativeStackNavigator({
  screens: {
    ListaOs: {
      screen: ListaOs,
    },
    CriarOs: {
      screen: CriarOs,
    },
    Notificacoes: {
        screen: Notificacoes,
    },
    Perfil: {
        screen: Perfil,
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}