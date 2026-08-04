import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { api } from "../../server/api";
import { useNavigation } from "expo-router";

export const Login = () => {
    const [email, useEmail] = useState("");
    const [senha, useSenha] = useState("");
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/imgs/logo.svg')} style={styles.logo} resizeMode="contain" />
            <View style={styles.container_form}>
                <View style={styles.container_title}>
                    <Text style={styles.h1}>Chama Jussa</Text>
                    <Text>Gerenciamento de Ordens de Servico</Text>
                </View>

                <View style={styles.container_inputs}>
                    <View>
                        <Text>E-mail</Text>
                        <TextInput placeholder="email@email.com" style={styles.text_input} onChangeText={currentMail => useEmail(currentMail)} />
                    </View>

                    <View>
                        <Text>Senha</Text>
                        <TextInput placeholder="Digite sua senha" textContentType="password" style={styles.text_input} onChangeText={currentPass => useSenha(currentPass)} />
                    </View>

                    <TouchableOpacity style={styles.btn_login} onPress={(e) => {
                    }}>
                        <Text style={styles.font_btn}>Acessar o sistema</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f4f6',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    logo: {
        height: '25%'
    },

    container_form: {
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.28)',
        width: '80%',
        height: '55%'
    },

    container_inputs: {
        alignSelf: 'center',
        width: '80%',
        height: '50%',
        justifyContent: 'space-between'
    },

    text_input: {
        borderColor: '#ccc',
        borderRadius: 5,
        color: '#6f6f6f',

        alignSelf: 'center',
        width: '100%',
        borderWidth: 1,
        padding: 10
    },

    container_title: {
        alignItems: 'center',
        marginTop: '15%',
        marginBottom: '10%'
    },

    h1: {
        fontSize: 25,
        fontWeight: 'bold',
    },

    btn_login: {
        alignSelf: 'center',
        width: '100%',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#10B981',
        alignItems: 'center',
    },

    font_btn: {
        color: '#fff',
    }
});
