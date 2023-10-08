import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import EscolhaJogadores from './src/EscolhaJogadores';
import HomePage from './src/HomePage';
import JogoVelha from './src/jogoVelha/JogoVelha';
import JogoForca from './src/jogoForca/JogoForca';
import PalavraForca from './src/PalavraForca';

export default function App() {
  const [screen, setScreen] = useState("homepage");
  const [jogador1, setJogador1] = useState("");
  const [jogador2, setJogador2] = useState("");
  const [palavra, setPalavra] = useState("");

  const checkScreen = (screenName) => screenName === screen;

  const setJogadores = (nome1, nome2) => {
    setJogador1(nome1);
    setJogador2(nome2);
  }

  const changeScreen = (newScreen) => setScreen(newScreen);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {checkScreen('homepage') && (
        <HomePage 
          changeScreen={changeScreen}
        />
      )}
      {checkScreen("escolhajogadores") && (
        <EscolhaJogadores
          mudarNomeJogadores={setJogadores}
          changeScreen={changeScreen}
        />
      )}
      {checkScreen("jogovelha") && (
        <JogoVelha
          changeScreen={changeScreen}
          player1={jogador1}
          player2={jogador2}
        />
      )}
      {checkScreen('jogoforca') && (
        <JogoForca 
          changeScreen={changeScreen}
          palavra={palavra}
        />
      )}
      {checkScreen('palavraforca') && (
        <PalavraForca 
          changeScreen={changeScreen}
          setPalavra={setPalavra}
        />
      )}
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
