import { FlatList, Pressable, Text, View } from "react-native"

const notificacoes = [
    {
        id: "1",
        titulo: "Ordem de Serviço finalizada",
        descricao: "Sua OS foi finalizada, logo ela voltará para sua sala.",
        data: '22/06/2026',
        hora: '15:02:55'
    },
    {
        id: "2",
        titulo: "Ordem de Serviço finalizada",
        descricao: "Sua OS foi finalizada, logo ela voltará para sua sala.",
        data: '22/06/2026',
        hora: '15:02:55'
    },
    {
        id: "3",
        titulo: "Ordem de Serviço finalizada",
        descricao: "Sua OS foi finalizada, logo ela voltará para sua sala.",
        data: '22/06/2026',
        hora: '15:02:55'

    },
    {
        id: "4",
        titulo: "Ordem de Serviço finalizada",
        descricao: "Sua OS foi finalizada, logo ela voltará para sua sala.",
        data: '22/06/2026',
        hora: '15:02:55'
    },
    {
        id: "5",
        titulo: "Ordem de Serviço finalizada",
        descricao: "Sua OS foi finalizada, logo ela voltará para sua sala.",
        data: '23/06/2026',
        hora: '15:02:55'
    },
    {
        id: "6",
        titulo: "Ordem de Serviço finalizada",
        descricao: "Sua OS foi finalizada, logo ela voltará para sua sala.",
        data: '23/06/2026',
        hora: '15:02:55'
    },
    {
        id: "7",
        titulo: "Ordem de Serviço finalizada",
        descricao: "Sua OS foi finalizada, logo ela voltará para sua sala.",
        data: '23/06/2026',
        hora: '15:02:55'
    },
]

const Notificacoes = () => {
    return (
        <View>
            <Text>Notificações</Text>
            <FlatList
                data={notificacoes}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Pressable>
                        <View>
                            <Text>Icon</Text>
                        </View>
                        <View>
                            <Text>{item.titulo}</Text>
                            <Text>{item.descricao}</Text>
                            <View>
                                <Text>{item.data}</Text>
                                <Text>{item.hora}</Text>
                            </View>
                        </View>
                    </Pressable>
                )} />
        </View>
    )
}

export default Notificacoes;