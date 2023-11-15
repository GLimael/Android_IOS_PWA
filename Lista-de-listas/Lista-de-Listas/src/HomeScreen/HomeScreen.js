import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import metadata from '../storage.metadata.json';
import { useIsFocused } from '@react-navigation/native';

export default function HomeScreen({ navigation }) {
    const [lista, setLista] = useState([]);
    const focus = useIsFocused();
    useEffect(() => {buscar()}, [focus]);

    const buscar = async () => {
        const itens = await AsyncStorage.getItem(metadata.LISTA);
        setLista(JSON.parse(itens));
    }

    
    console.log("Home: ", lista, typeof lista)

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <TouchableOpacity onPress={() => {navigation.navigate('EditorLista', {nomeLista: "bruno"})}} >
                <Text>Adicionar Lista</Text>
            </TouchableOpacity>
            {lista && 
                lista.map((nome, index) => {
                    return (
                        <View key={index}>
                            <Text>{nome}</Text>
                        </View>
                    )
                })
            }
            
        </View>
    );
}