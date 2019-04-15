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
  colors: Array<string>,
  size: 'small' | 'large'
}

export const ColorSelector = (props: Props) => {

  const {
    colors,
    size
  } = props

  const circleSize = size === 'large' ? 32 : 16
  const circlePadding = size === 'large' ? 4 : 2
  const circleStyle = {
    height: circleSize,
    width: circleSize,
    borderRadius: circleSize / 2
  }

  return (
    <FlatList
        style={styles.container}
        horizontal={true}
        data={colors}
        keyExtractor={(item, index) => item}
        renderItem={({item}) => {
            return (
              <TouchableOpacity key={item} style={{ padding: circlePadding}}>
                <View style={[circleStyle, { backgroundColor: item }]}/>
              </TouchableOpacity>
            )
          }
        }
      />
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingVertical: 4
    // margin: 14
  }
})
