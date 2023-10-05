import { View, StyleSheet, Button } from "react-native";
import Header from "./Header";
import Figura from "./Figura/Figura";
import Dicas from './Dicas';

export default function Jogo ({
    changeScreen
}) {

    // const voltar = () => {
    //     changeScreen("homepage")
    // }

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.row}>
                <Figura />
                <Dicas palavra={'Legal'}/>
            </View>
            {/* <Button title={"Voltar"} onPress={voltar} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
})