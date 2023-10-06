import { View, TextInput, Button } from "react-native";

export default function PalavraForca ({changeScreen, setPalavra}) {
    const palavra = palavra;

    const jogar = (palavra) => {
        changeScreen('jogoforca')
        setPalavra({palavra})
    }

    return (
        <View>
            <Text >Digite a palavra para o jogo: </Text>
            <TextInput placeholder="Palavra" value={palavra}/>
            <Button title="Jogar" onPress={jogar(palavra)}/>
        </View>
    )
}