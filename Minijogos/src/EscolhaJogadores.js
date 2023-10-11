import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import colors from "./jogoForca/Cores/Cores"

export default function EscolhaJogadores({
  mudarNomeJogadores,
  changeScreen,
  pag
}) {
  const [jogador1, setJogador1] = useState("");
  const [jogador2, setJogador2] = useState("");

  const handleClick = () => {
    if (mudarNomeJogadores) {
      mudarNomeJogadores(jogador1, jogador2)
      console.log(pag)
      changeScreen(pag)
    }
  }

  const voltar = () => {
    changeScreen("homepage")
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={voltar} style={styles.button}>
        <Text style={styles.btnText}>Voltar</Text>
      </TouchableOpacity>
      <View style={styles.jogadores}>
        <View style={styles.jogador}>
          <TextInput placeholder='Jogador 1' value={jogador1} onChangeText={setJogador1} style={styles.input}/>
          <Text style={styles.text}>O nome do jogador 1 é: {jogador1}</Text>
        </View>
        <View style={styles.jogador}>
          <TextInput placeholder='Jogador 2' value={jogador2} onChangeText={setJogador2} style={styles.input}/>
          <Text style={styles.text}>O nome do jogador 2 é: {jogador2}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={handleClick} style={styles.button}>
        <Text style={styles.btnText}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 80,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  jogadores: {
    gap: 25,
  },
  jogador: {
    gap: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  input: {
    padding: 5,
    backgroundColor: colors.inputBox,
    borderRadius: 5,
    fontSize: 14,
    fontWeight: '500',
  },
  button: {
    backgroundColor: colors.Modal,
    padding: 8,
    borderRadius: 4,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
},
});
