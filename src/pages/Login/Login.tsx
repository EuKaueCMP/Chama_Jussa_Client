import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Image } from "expo-image"

export const Login = () => {
    const [email, useEmail] = useState("");
    const [senha, useSenha] = useState("");

    return (
        <View style={styles.container}>
            <Image source={require("../../../assets/imgs/logo.svg")} style={styles.logo} />
            <View style={styles.container_form}>
                <View style={styles.container_title}>
                    <Text style={{ fontFamily: 'Montserrat', fontSize: 25, fontWeight: 700 }}>Chama Jussa</Text>
                    <Text style={{fontFamily: 'Montserrat', fontSize: 15, fontWeight: 400}}>Gerenciamento de Ordens de Servico</Text>
                </View>

                <View style={styles.container_inputs}>
                    <View>
                        <Text>E-mail</Text>
                        <TextInput textContentType="emailAddress" placeholder="email@email.com" style={styles.text_input} onChangeText={currentMail => useEmail(currentMail)} />
                    </View>

                    <View>
                        <Text>Senha</Text>
                        <TextInput placeholder="Digite sua senha" textContentType="password" style={styles.text_input} onChangeText={currentPass => useSenha(currentPass)} />
                    </View>
                </View>

                <TouchableOpacity style={styles.btn_login} onPress={(e) => {
                }}>
                    <Text style={{ 'fontWeight': '600', color: '#fff' }}>Acessar o sistema</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f4f6',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    logo: {
        width: 250,
        height: 250,
        marginTop: '15%'
    },

    container_form: {
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.28)',
        width: '80%',
        height: '45%'
    },

    container_title: {
        alignItems: 'center',
        marginTop: '10%',
        marginBottom: '10%'
    },

    container_inputs: {
        alignSelf: 'center',
        width: '80%',
        height: '38%',
        justifyContent: 'space-between'
    },

    text_input: {
        borderColor: '#ccc',
        borderRadius: 5,
        color: '#6f6f6f',
        fontFamily: '',

        alignSelf: 'center',
        width: '100%',
        borderWidth: 1,
        padding: 12
    },

    btn_login: {
        alignSelf: 'center',
        width: '80%',
        padding: 12,
        borderRadius: 5,
        backgroundColor: '#10B981',
        alignItems: 'center',
        marginTop: '6%'
    },
});
