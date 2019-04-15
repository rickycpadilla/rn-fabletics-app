// @flow

import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  View
} from 'react-native'

import { colors, fonts } from '../utils/styles'

type Props = {
  colors: Array<string>
}

export const ColorSelector = (props: Props) => {

  const {
    colors
  } = props

  return (
    <FlatList
        horizontal={true}
        data={colors}
        keyExtractor={(item, index) => item}
        renderItem={({item}) => {
            return (
              <TouchableOpacity key={item}>
                <View style={[styles.colorCircle, { backgroundColor: item }]}/>
              </TouchableOpacity>
            )
          }
        }
      />
  )

  // return (
  //   <TouchableOpacity
  //     style={styles.container}
  //     onPress={onPress}
  //   >
  //     <View style={styles.button}>
  //       <Text style={styles.text}>{title}</Text>
  //     </View>
  //   </TouchableOpacity>
  // )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    margin: 14
  },
  colorCircle: {
    height: 32,
    width: 32,
    borderRadius: 16
  }
})
