import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from './Cores/Cores'

const Tecla = ({ text, onPress, disabled }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => onPress(text)} style={[styles.keyContainer, { backgroundColor: disabled ? '#99a' : colors.key }]}>
      <Text style={styles.key}>{text}</Text>
    </TouchableOpacity>
  )
}

const Teclado = ({ onPress, correctLetters, wrongLetters }) => {
  const teclas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return (
    <View style={styles.container}>
      {teclas.split('').map((l, index) => {
        const disable = correctLetters.includes(l) || wrongLetters.includes(l)
        return (
          <Tecla key={index} text={l} onPress={onPress} disabled={disable} />)
      })}
    </View>
  )
}

export default Teclado

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 20,
    flexWrap: 'wrap',
  },
  keyContainer: {
    width: 30,
    height: 38,
    backgroundColor: colors.key,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  key: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
})