import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "./jogoForca/Cores/Cores";

export default function PalavraForca ({
    changeScreen, setPalavra
}) {
    const [texto, setTexto] = useState("")

    const jogar = () => {
        if (texto === "") {
            alert("Insira uma palavra!")
        }else if (!texto.match("^[a-zA-Z]+$")) {
            alert("Insira uma palavra sem acento, sem espaço e sem carácteres especiais!")
        }else {
            changeScreen('jogoforca')
            setPalavra(texto)
        }
    }

    const voltar = () => {
        changeScreen('homepage')
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={voltar} style={styles.button}>
                <Text style={styles.btnText}>Voltar</Text>
            </TouchableOpacity>
            <View style={styles.conteudo}>
                <Text style={styles.text}>Digite a palavra para o jogo: </Text>
                <TextInput placeholder="Palavra" value={texto} onChangeText={setTexto} style={styles.input}/>
            </View>
            <TouchableOpacity onPress={jogar} style={styles.button}>
                <Text style={styles.btnText}>Jogar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 80,
        backgroundColor: colors.background,
    },
    conteudo: {
        gap: 15,
    },
    text: {
        fontSize: 18,
        fontWeight: '700',
    },
    input: {
        fontSize: 16,
        fontWeight: '500',
        backgroundColor: colors.inputBox,
        padding: 5,
        borderRadius: 5,
    },
    button: {
        backgroundColor: colors.Modal,
        padding: 8,
        borderRadius: 4,
    },
    btnText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
    },
})