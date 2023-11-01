import { useEffect, useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
    const [lista, setLista] = useState("");
    useEffect(() => {setLista()}, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <TouchableOpacity onPress={navigation.navigate('EditorLista')} >
                <Text>Adicionar Lista</Text>
            </TouchableOpacity>
            
        </View>
    );
}