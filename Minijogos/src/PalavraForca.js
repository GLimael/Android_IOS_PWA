import { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

export default function PalavraForca ({changeScreen, setPalavra}) {
    const [texto, setTexto] = useState("")

    const jogar = () => {
        changeScreen('jogoforca')
        setPalavra(texto)
    }

    return (
        <View>
            <Text >Digite a palavra para o jogo: </Text>
            <TextInput placeholder="Palavra" value={texto} onChangeText={setTexto}/>
            <Button title="Jogar" onPress={jogar} />
        </View>
    )
}