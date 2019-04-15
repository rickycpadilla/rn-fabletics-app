// @flow

import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  View
} from 'react-native'

import { colors, fonts } from '../utils/styles'

type Props = {
  title: string,
  onPress: () => void
}

export const Button = (props: Props) => {

  const {
    title,
    onPress
  } = props

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    margin: 14
  },
  button: {
    backgroundColor: colors.lightPurple,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60
  },
  text: {
    backgroundColor: 'transparent',
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 23
  }
})
