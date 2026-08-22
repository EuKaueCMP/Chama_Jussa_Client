import { Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_700Bold, useFonts } from '@expo-google-fonts/montserrat';
import { Stack } from 'expo-router'

const RootLayout = () => {
    const [loaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
    });

    if (!loaded) {
        return null;
    }

    return (
        <Stack>
            {/* stack.screen -> cada item da pilha/cada tela */}
            {/* name -> o nome da pasta da tela */}
            <Stack.Screen
                name="login/index"
                options={{
                    title: "Login",
                    headerShown: false
                }} />
            <Stack.Screen
                name="(tabs)"
                options={{
                    title: "Lista de OS"
                }}
            />
        </Stack>
    )
}

export default RootLayout;