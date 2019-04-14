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

import type { OnboardingScreenType, OnboardingOptionType } from '../../types'
import { OnboardingOptionsSelect, PageIndicator, Button } from '../../components'
import { screenSize } from '../../utils/device'
import { colors } from '../../utils/styles'
import images from '../../utils/images'

export const initialImageHeight = screenSize.width * 0.65

type Props = {
  heroImageHeight: number,
  onScroll: () => void
}

export default (props: Props,) => {

	const {
    heroImageHeight,
    onScroll
	} = props

	return (
		<View style={styles.container}>
      <Image
        source={{uri: 'http://fabletics-us-cdn.justfab.com/media/images/brand/ftv/5217/masthead-1.jpg'}}
        style={[styles.heroImage, { height: heroImageHeight }]}
      />
      {/* <View style={{flex: 1}}/> */}
      <ScrollView
        scrollEventThrottle={1}
        onScroll={onScroll}
        style={styles.scrollContainer}
      >
        <View style={styles.heroImageOverlayContainer}>
          <View style={{ flex: 1 }}/>
          <Button title={'GET STARTED'} onPress={() => {}} />
        </View>
        <View style={{ height: 2000, backgroundColor: 'white' }}>
          
        </View>
      </ScrollView>
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
    backgroundColor: colors.lightPurple,
    width: screenSize.width,
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'cover'
  },
  heroImageOverlayContainer: {
    height: initialImageHeight,
    backgroundColor: 'transparent'
  }
})
