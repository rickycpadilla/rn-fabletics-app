// @flow

import React from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native'

import type { ProductPreviewType } from '../types'
import { colors, fonts } from '../utils/styles'

type Props = {
  productPreview: ProductPreviewType
}

export const ProductPreview = (props: Props) => {
  const {
    productPreview
  } = props

  const price = productPreview.salePrice || productPreview.originalPrice

  return (
    <View style={styles.container}>
      <Image
        source={{uri: productPreview.previewImageUrl}}
        style={styles.previewPhoto}
      />
      {/* Color row here */}
      {
        productPreview.saleDescription ? (
          <Text style={styles.saleDescription}>
            {productPreview.saleDescription}
          </Text>
        ) : null
      }
      <Text style={styles.productName}>
        {productPreview.name}
      </Text>
      <Text style={styles.salePrice}>
        {`$${price}`}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 12,
    width: 160,
  },
  previewPhoto: {
    height: 200,
    // width: 160,
    resizeMode: 'cover'
  },
  productName: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
    color: colors.black
  },
  saleDescription: {
    fontFamily: fonts.light,
    fontSize: 14,
    color: colors.teal
  },
  salePrice: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.teal
  }
})