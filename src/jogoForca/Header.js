import { View, Text, StyleSheet } from "react-native";

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Jogo da Forca
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: '900',
    }
})