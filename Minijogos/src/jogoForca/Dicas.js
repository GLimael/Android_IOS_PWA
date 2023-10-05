import { View, Text, StyleSheet } from "react-native";
import Cores from "./Figura/Cores/Cores";

export default function Dicas ({ palavra }) {
    return (
        <View style={styles.container}>
            <Text>Oposto da palavra: </Text>
            <Text style={styles.palavra}>{palavra}</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: Cores.dicas,
        padding: 10,
        borderRadius: 10, 
    },
    palavra: {
        fontSize: 20,
        fontWeight: "700",
        marginVertical: 8,
    },
})