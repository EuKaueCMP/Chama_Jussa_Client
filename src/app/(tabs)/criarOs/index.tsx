import { Text, TextInput, TouchableOpacity, View } from "react-native"

export default function CriarOs() {
    return (
        <View>
            <Text>Criar ordem de serviço</Text>
            <View>
                <View>
                    <Text>Título do problema *</Text>
                    <TextInput placeholder="Ex: Vazamento da pia" />
                </View>
                <View>
                    <Text>Máquina / Equipamento *</Text>
                    <TextInput placeholder="Ex: Cadeira ergonômica" />
                </View>
                <View>
                    <Text>Local / Setor *</Text>
                    <TextInput placeholder="Ex: Sala 7 - 1° Andar" />
                </View>
                <View>
                    <Text>Descrição do problema *</Text>
                    <TextInput placeholder="Ex: O botão que aumenta o nivel da cadeira não está funcionando." />
                </View>
                <View>
                    <Text>Imagem / Foto do problema *</Text>
                    <TextInput placeholder="insira a imagem" />
                </View>
                <TouchableOpacity>
                    <Text>Abrir Odem de Serviço</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
