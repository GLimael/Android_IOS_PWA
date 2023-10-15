import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function JogoMemoria({changeScreen}) {

    const voltar = () => {
        changeScreen('escolhajogadores')
    }

    const [cartas, setCartas] = useState([])

    const embaralhar = () => {
        const cartasEmbaralhadas = [...cartas, ...cartas]
        .sort(() => Math.random() - 0.5)
        .map((carta) => ({...card, key: Math.random()}))

        setCartas(cartasEmbaralhadas)
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={voltar}>
                <Text>Voltar</Text>
            </TouchableOpacity>
            <Text>
                Jogo da Memória
            </Text>
            <View style={styles.grade}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',  
    },
    grade: {
        marginTop: 40,
        gap: 20,
    }
})