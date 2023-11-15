import { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import metadata from '../storage.metadata.json';
import { useIsFocused } from '@react-navigation/native';


export default function HomeScreen({ navigation, route }) {


    const nome = route.params?.nomeLista;

    
    const [lista, setLista] = useState([]);
    const [nomeLista, setNomeLista] = useState("");
    const focus = useIsFocused();
    useEffect(() => {getLista()}, [focus]);

    const getLista = async () => {
        const listaTemporaria = await AsyncStorage.getItem(metadata.LISTA);
        if (typeof JSON.parse(listaTemporaria) != "object" || JSON.parse(listaTemporaria) == null) {
            setLista([])
        }else {
            setLista(JSON.parse(listaTemporaria));
        }
    }

    console.log(lista, typeof lista)
    const salvar = async () => {
        let variavel = nomeLista === "" ? [...lista] : [...lista, nomeLista];
        console.log("variavel: ", variavel, typeof variavel)
        await AsyncStorage.setItem(metadata.LISTA, JSON.stringify(variavel));
        nomeLista !== "" ? navigation.navigate('Home') : alert("Digite algo!");
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Adicionar Lista</Text>
            <TextInput placeholder='Nome da lista' value={nomeLista} onChangeText={setNomeLista} />
            <TouchableOpacity onPress={salvar}>
                <Text>Salvar Lista</Text>
            </TouchableOpacity>
        </View>
    );
}