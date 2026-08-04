import { Link } from "expo-router";
import { View } from "react-native";

export const Navbar = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%'}}>
      <Link href="/ListaOs">Minhas OS</Link>
      <Link href="/CriarOs">Criar OS</Link>
      <Link href="/Notificacoes">Notificacoes</Link>
      <Link href="/Perfil">Perfil</Link>
    </View>
  )
}
