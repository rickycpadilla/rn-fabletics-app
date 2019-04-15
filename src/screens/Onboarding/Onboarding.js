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
import {
	OnboardingOptionsSelect,
	PageIndicator,
	OnboardingSizeSurvey
} from '../../components'
import { screenSize } from '../../utils/device'
import { colors, fonts } from '../../utils/styles'
import images from '../../utils/images'

type Props = {
	currentPageIndex: number,
	onboardingScreenQuestions: Array<OnboardingScreenType>,
	onScroll: (event: any, state: any) => void,
	onSelectOption: (option: OnboardingOptionType) => void
}

// $FlowFixMe
const Onboarding = React.forwardRef((props: Props, ref: any) => {

	const {
		currentPageIndex,
		onboardingScreenQuestions,
		onScroll,
		onSelectOption,
		onSelectSize,
		onSubmit,
		favoriteExercise,
		favoriteExercisePlace,
		favoriteColorPalette,
		bodyType,
		bottom,
		top,
		bra
	} = props

	return (
		<SafeAreaView style={styles.container}>
			<Image source={images.logoBlack} style={styles.logo}/>
			<View style={styles.headerContainer}>
				<Text style={styles.headerLabel}>
					{'Take our quick lifestyle quiz to get personalized outfit picks.'}
				</Text>
			</View>
			<ScrollView
				ref={ref}
				horizontal={true}
				decelerationRate={0}
				showsHorizontalScrollIndicator={false}
				pagingEnabled={true}
				scrollEventThrottle={8}
				onScroll={(e, state) => onScroll(e, state)}
				automaticallyAdjustContentInsets={false}
			>
				{
					onboardingScreenQuestions.map((screen, i) => {
						return (
							<OnboardingOptionsSelect
								key={i}
								onboardingScreen={screen}
								darkText={i !== 1}
								onSelectOption={onSelectOption}
							/>
						)
					})
				}
				<OnboardingSizeSurvey
					onSelectSize={onSelectSize}
					onPressSubmit={onSubmit}
				/>
			</ScrollView>
			<View style={styles.pageIndicatorContainer}>
				<PageIndicator
					pageCount={onboardingScreenQuestions.length + 1}
					selectedPageIndex={currentPageIndex}
				/>
			</View>
		</SafeAreaView>
	)

})

export default Onboarding

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  logo: {
		width: screenSize.width - 160,
		height: 80,
		resizeMode: 'contain'
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30
  },
  headerLabel: {
		fontSize: 14,
		fontFamily: fonts.regular,
		color: colors.black,
		opacity: 0.7
  },
  pageIndicatorContainer: {
		height: 40
  }
})
