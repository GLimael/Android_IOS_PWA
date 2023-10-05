import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button }
  from 'react-native';
//props = {mudarNomeJogadores}
export default function Home({
  mudarNomeJogadores,
  changeScreen
}) {
  const [jogador1, setJogador1] = useState("");
  const [jogador2, setJogador2] = useState("");

  const handleClick = () => {
    if (mudarNomeJogadores) {
      mudarNomeJogadores(jogador1, jogador2)
      changeScreen("jogovelha")
    }
  }

  const voltar = () => {
    changeScreen("homepage")
  }

  return (
    <View style={styles.container}>
      <Button title='Voltar' onPress={voltar} />
      <TextInput placeholder='Jogador 1' value={jogador1} onChangeText={setJogador1} />
      <Text>O nome do jogador 1 é: {jogador1}</Text>

      <TextInput placeholder='Jogador 2' value={jogador2} onChangeText={setJogador2} />
      <Text>O nome do jogador 2 é: {jogador2}</Text>

      <Button title='Iniciar' onPress={handleClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
