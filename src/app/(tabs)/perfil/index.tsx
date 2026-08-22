import { Text, TouchableOpacity, View } from "react-native"
import { Image } from "expo-image";

export default function Perfil() {
    return (
        <View>
            <Text>Perfil</Text>
            <View>
                <View>
                    <Image source={require('../../../../assets/imgs/logo.svg')} />
                    <View>
                        <Text>Késsia milena</Text>
                        <Text>kessia@email.com</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity>
                <Text>Sair da Conta</Text>
            </TouchableOpacity>
        </View>
    )
}

