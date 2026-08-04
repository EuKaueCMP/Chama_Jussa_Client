import { View, Text } from "react-native"
import { Navbar } from "../../components/navbar/Navbar"

export const ListaOs = () => {

    return (
        <View>
            <View>
                <View>
                    <Text>Ola usuario</Text>
                    <Text>Minhas OSs</Text>
                </View>
                <button>Nova OS</button>
            </View>
            <View></View>
            <Navbar />
        </View>
    )
}
