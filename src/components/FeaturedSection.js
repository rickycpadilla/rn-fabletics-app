// @flow

import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native'

import type { FeaturedSectionType } from '../types'
import { colors, fonts } from '../utils/styles'
import { ProductPreview } from './'

type Props = {
  section: FeaturedSectionType
}

export const FeaturedSection = (props: Props) => {

  const {
    section
  } = props

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{section.title}</Text>
      <FlatList
        horizontal={true}
        data={section.productPreviews}
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => {
            return (
              <TouchableOpacity key={item.id}>
                <ProductPreview
                  productPreview={item}
                />
              </TouchableOpacity>
            )
          }
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'stretch'
  },
  flatList: {
    height: 200
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 28,
    color: colors.black,
    marginLeft: 12,
    marginTop: 6
  }
})
