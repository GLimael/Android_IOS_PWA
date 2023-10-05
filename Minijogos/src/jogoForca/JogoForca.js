import { View, StyleSheet, Button } from "react-native";
import Header from "./Header";
import Figura from "./Figura/Figura";

export default function Jogo ({
    changeScreen
}) {

    // const voltar = () => {
    //     changeScreen("homepage")
    // }

    return (
        <View style={styles.container}>
            <Header />
            {/* <Button title={"Voltar"} onPress={voltar} /> */}
            <Figura />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})