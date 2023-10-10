import { StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import Header from './Header'
import Figura from './Figura/Figura'
import Palavra from './Palavra'
import Teclado from './Teclado'
import StatusPopup from './StatusPopup'

const index = ({
  changeScreen,
  palavra
}) => {
  const [correctLetters, setCorrectLetters] = useState('');
  const [wrongLetters, setWrongLetters] = useState('');
  const [status, setStatus] = useState('');

  const correctWord = palavra;

  const storeCorrectLetters = (keyInput) => {
    const ans = correctWord.toUpperCase();
    if (ans.includes(keyInput)) {
      const cl = correctLetters + keyInput;
      setCorrectLetters(cl);
      // check win
      updateStatus(cl);
    } else {
      const wl = wrongLetters + keyInput;
      setWrongLetters(wl);
      if (wl.length > 5) {
        // lost
        setStatus('lost')
      }
    }
  }

  const updateStatus = (cl) => {
    let status = 'win';
    const correctWordArray = Array.from(correctWord.toUpperCase());
    correctWordArray.forEach(letter => {
      if (!cl.includes(letter)) {
        status = '';
      }
    })
    if (status === 'win') {
      setStatus('completed')
      return
    }
    setStatus(status);
  }

  const handlePopupButton = () => {
    if (status === 'completed') {
      changeScreen('homepage')
    }
    // clear all stored data
    setCorrectLetters('')
    setWrongLetters('')
    setStatus('')
  }

  const voltar = () => {
    changeScreen('palavraforca')
  }

  return (
    <View style={styles.container}>
      <Header />
      <Figura palavraErrada={wrongLetters.length} />
      <Palavra correctLetters={correctLetters} answer={correctWord} />
      <Teclado correctLetters={correctLetters} wrongLetters={wrongLetters} onPress={(input) => storeCorrectLetters(input)} />
      <StatusPopup status={status} onPress={handlePopupButton} />
      <Button title={"Voltar"} onPress={voltar} />
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})