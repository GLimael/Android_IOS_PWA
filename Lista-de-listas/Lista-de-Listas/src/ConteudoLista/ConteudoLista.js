import { View, Text } from 'react-native';

export default function ConteudoLista({ navigate, route }) {
    const {list} = route.params;
    console.log(list);
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>{list}</Text>
        </View>
    )
}