import { Stack } from 'expo-router'

const RootLayout = () => {
    return (
        <Stack>
            {/* stack.screen -> cada item da pilha/cada tela */}
            {/* name -> o nome da pasta da tela */}
            <Stack.Screen
                name="login/index.tsx"
                options={{
                    title: "Login",
                    headerShown: false
                }} />
            <Stack.Screen
                name="listaOs/index.tsx"
                options={{
                    title: "Lista de OS"
                }}
            />
        </Stack>
    )
}

export default RootLayout;