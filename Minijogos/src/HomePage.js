import { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import colors from "./jogoForca/Cores/Cores";

export default function HomePage({
    changeScreen,
    pag
}) {

    const jogoForca = () => {
        changeScreen("palavraforca")
    }

    const paginaRetorno = (page) =>{
        const pagina = (page === 'velha' ? 'jogovelha' : 'jogomemoria')
        pag(pagina);    
    }

    const jogoVelha = () => {
        paginaRetorno('velha')
        changeScreen("escolhajogadores")
    }

    const jogoMemoria = () => {
        paginaRetorno('memoria')
        changeScreen("escolhajogadores")
    }

   

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Lima Minijogos
            </Text>
            <View style={styles.botoes}>
                <TouchableOpacity onPress={jogoVelha} style={styles.button} >
                    <Text style={styles.btnText}>Jogo da Velha</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={jogoForca} style={styles.button}>
                    <Text style={styles.btnText}>Jogo da Forca</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={jogoMemoria} style={styles.button}>
                    <Text style={styles.btnText}>Jogo da Memória</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 80,
    },
    text: {
        fontSize: 22,
        fontWeight: '800',
    },
    botoes: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
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