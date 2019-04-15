// @flow

import React from 'react'
import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	TouchableOpacity,
	SafeAreaView
} from 'react-native'

import { ColorSelector } from '../../components'
import type { ProductPreviewType, ClothesSize } from '../../types'
import { screenSize } from '../../utils/device'
import { colors, fonts } from '../../utils/styles'
import images from '../../utils/images'
import { getSizeString } from '../../utils/helpers'

export const initialImageHeight = screenSize.height * .55

type Props = {
  heroImageHeight: number,
  onScroll: () => void,
  product: ?ProductPreviewType,
  userSize: ?ClothesSize
}

export default (props: Props,) => {

	const {
    heroImageHeight,
    onScroll,
    product,
    userSize
  } = props
  
  if (product == null) return null
  const size = userSize ? getSizeString(userSize) : 'Medium'
  const sizeString = `Your Size: ${size}`

	return (
		<View style={styles.container}>
      <Image
        source={{uri: product.largeImageUrl}}
        style={[styles.heroImage, { height: heroImageHeight }]}
      />
      <ScrollView
        scrollEventThrottle={1}
        onScroll={onScroll}
        style={styles.scrollContainer}
      >
        <View style={styles.heroImageOverlayContainer}/>
        <View style={{ backgroundColor: 'white', padding: 12 }}>
          <Text style={styles.productName}>{product.name}</Text>
          <View style={styles.priceRow}>
            <Text style={styles.sale}>{product.saleDescription}</Text>
            <Text style={styles.sale}>
              {`$${product.salePrice || product.originalPrice}`}
            </Text>
          </View>
          <Text style={styles.label}>{'Colors'}</Text>
          <ColorSelector
            colors={product.colors}
            size={'large'}
          />
          <View style={{ height: 14 }}/>
          <Text style={styles.label}>{sizeString}</Text>
          <View style={{ height: 14 }}/>
          <Text style={styles.label}>{'Product Description'}</Text>
          <Text style={styles.detail}>{product.productDescription}</Text>
        </View>
      </ScrollView>
      <View style={styles.addToCartContainer}>
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.cartButton}>
          <Text style={styles.buttonText}>
            {'Add Item to Cart'}
          </Text>
        </View>
      </TouchableOpacity>
      </View>
      <SafeAreaView style={{backgroundColor: 'white'}}/>
    </View>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column'
  },
  heroImage: {
    alignSelf: 'stretch',
    backgroundColor: 'gray',
    width: screenSize.width,
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'cover'
  },
  heroImageOverlayContainer: {
    height: initialImageHeight,
    backgroundColor: 'transparent'
  },
  productName: {
    fontFamily: fonts.bold,
    fontSize: 32,
    color: colors.black,
    marginBottom: 8
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  sale: {
    color: colors.coral,
    fontFamily: fonts.regular,
    fontSize: 22
  },
  addToCartContainer: {
    backgroundColor: 'white',
    padding: 12,
    shadowColor: 'black',
    shadowOffset: {height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.1
  },
  cartButton: {
    height: 60,
    backgroundColor: colors.coral,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    marginBottom: 8,
    fontFamily: fonts.semiBold,
    color: colors.black,
    fontSize: 18
  },
  detail: {
    marginBottom: 8,
    fontFamily: fonts.regular,
    color: colors.black,
    fontSize: 14,
    opacity: 0.8
  },
  buttonText: {
    color: 'white',
    fontFamily: fonts.semiBold,
    fontSize: 20
  }
})
