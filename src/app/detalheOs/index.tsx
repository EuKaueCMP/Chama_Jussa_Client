import { Text, TouchableOpacity, View } from "react-native"
import { Image } from 'expo-image'

const index = () => {
  return (
    <View>
      <Text>Detalhe da OS-X</Text>
      <View>
        <View>
          <Text>Vazamento hidráulico</Text>
          <Text>Criada em 17/06/2026, 11:29:58</Text>
        </View>
        <View>
          <View>
            <Text>Máquina/Equipamento</Text>
            <Text>Tubulação/Sifão da Pia</Text>
          </View>
          <View>
            <Text>Local/Setor</Text>
            <Text>Banheiro Masculino - Bloco B - 2° Andar</Text>
          </View>
          <View>
            <Text>Solicitante</Text>
            <Text>K~essia Milena</Text>
          </View>
          <View>Line</View>
          <View>
            <Text>Descrição do Problema</Text>
            <Text>Há um vazamento constante de água por baixo da pia do banheiiro masculino do segundo andar do Bloco B. Está alagando o chão e causando risco de queda.</Text>
          </View>
          <View>
            <Text>Foto do problema</Text>
            <Image source={require('fotoImagem')} />
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <Text>Editar Solicitação</Text>
      </TouchableOpacity>
    </View>
  )
}

export default index