import { Button, View, Text, StyleSheet } from "react-native";

export default function HomePage({
    changeScreen
}) {

    const jogoVelha = () => {
        changeScreen("escolhajogadores")
    }

    const jogoForca = () => {
        changeScreen("palavraforca")
    }

    const jogoMemoria = () => {
        changeScreen("escolhajogadores")
    }

    return (
        <View style={styles.container}>
            <Text>
                Lima Minijogos
            </Text>
            <Button title={"Jogo da velha"} onPress={jogoVelha} />
            <Button title={"Jogo da forca"} onPress={jogoForca} />
            <Button title={"Jogo da memória"} onPress={jogoMemoria} />
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})