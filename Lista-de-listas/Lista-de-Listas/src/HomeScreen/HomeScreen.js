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

    const removeLista = (item) => {
        console.log("RemoveLista: ", item);

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
                        <View key={index} style={{width: "80%", backgroundColor: '#dcdcdc', flexDirection: 'row', marginBottom: 4, alignItems: 'center'}}>
                            <TouchableOpacity onPress={() => {navigation.navigate('ConteudoLista', {list: nome})}} style={{width: '85%', paddingHorizontal: 16, paddingVertical: 8}} >
                                <Text>{nome}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginRight: 8}}>
                                <Text>🖊</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                removeLista(nome)
                            }}>
                                <Text>🗑</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
            
        </View>
    );
}