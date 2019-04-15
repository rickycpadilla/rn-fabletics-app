// @flow

import React from 'react'
import {
	StyleSheet,
	View,
	FlatList,
	Text,
	TouchableOpacity,
	ImageBackground
} from 'react-native'
import type { OnboardingScreenType, OnboardingOptionType } from '../types'
import { screenSize } from '../utils/device'
import { colors } from '../utils/styles'

type Props = {
	onboardingScreen: OnboardingScreenType,
	darkText: boolean,
	onSelectOption: (option: OnboardingOptionType) => void
}

export const OnboardingOptionsSelect = (props: Props) => {
	const { onboardingScreen, darkText, onSelectOption } = props

	return (
		<View style={styles.container}>
			<View style={styles.questionContainer}>
				<Text style={styles.question}>
					{onboardingScreen.question}
				</Text>
			</View>
			<View style={styles.buttonContainer}>
			{
				onboardingScreen.options.map((option, i) => {
					return (
						<TouchableOpacity
							key={i}
							style={styles.button}
							onPress={() => onSelectOption(option)}
						>
							<ImageBackground source={{uri: option.imageUrl}} style={styles.buttonImage}>
								<View style={{ flex: 1}}/>
								<Text
									style={[
										styles.optionLabel,
										{ color: darkText ? colors.black : 'white' }
									]}
								>
									{option.name}
								</Text>
							</ImageBackground>
						</TouchableOpacity>
					)
				})
			}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: screenSize.width,
		flexDirection: 'column',
		padding: 18
	},
	questionContainer: {
		paddingHorizontal: 30,
		marginBottom: 12
	},
	buttonContainer: {
		flexDirection: 'column',
		flex: 1
	},
	button: {
		borderRadius: 8,
		marginTop: 6,
		marginBottom: 6,
		backgroundColor: 'gray',
		flex: 1,
		overflow: 'hidden'
	},
	buttonImage: {
		flex: 1,
		resizeMode: 'cover'
	},
	question: {
		fontSize: 22,
		fontFamily: 'Helvetica',
		fontWeight: '500',
		textAlign: 'center',
		color: colors.black,
		opacity: 0.9
	},
	optionLabel: {
		fontSize: 18,
		fontFamily: 'Helvetica',
		fontWeight: 'bold',
		textAlign: 'left',
		marginBottom: 8,
		marginLeft: 8
	}
})
