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

import {
  OnboardingOptionsSelect,
  PageIndicator,
  Button,
  FeaturedSection
} from '../../components'
import type { FeaturedSectionType } from '../../types'
import { screenSize } from '../../utils/device'
import { colors, fonts } from '../../utils/styles'
import images from '../../utils/images'

export const initialImageHeight = screenSize.width * 0.65

type Props = {
  heroImageHeight: number,
  onScroll: () => void,
  featuredSections: Array<FeaturedSectionType>
}

export default (props: Props,) => {

	const {
    heroImageHeight,
    onScroll,
    featuredSections
	} = props

	return (
		<View style={styles.container}>
      <Image
        source={{uri: 'http://fabletics-us-cdn.justfab.com/media/images/brand/ftv/5217/masthead-1.jpg'}}
        style={[styles.heroImage, { height: heroImageHeight }]}
      />
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
          <Text style={styles.vipDeals}>{'VIP Deals'}</Text>
          {
            featuredSections.map((section, i) => {
              return (
                <FeaturedSection
                  key={section.id}
                  section={section}
                />
              )
            })
          }
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
  },
  vipDeals: {
    fontFamily: fonts.bold,
    fontSize: 32,
    color: colors.black,
    marginLeft: 14,
    marginTop: 14
  }
})
