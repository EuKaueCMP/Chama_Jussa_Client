import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Login } from './src/pages/Login/Login';

export default function App() {
  return (
    // SafeAreaProvider -> calcular o tamanho das extremidades (topo e rodape)
    <SafeAreaProvider>
      {/* // SafeAreaView -> aplica o padrao de margem necessaria para o tamanho do celular */}
      <SafeAreaView style={styles.safeAreaView}>
        {/* <StatusBar style='dark'/>
        <StatusBar style='light'/> */}
        <StatusBar style='auto'/>
        <Login />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});