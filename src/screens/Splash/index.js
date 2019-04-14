// @flow

import React, { Component } from 'react'
import {
	View,
	StyleSheet,
	Image,
	SafeAreaView,
	TouchableOpacity,
	Text
} from 'react-native'
import Video from 'react-native-video'

import { screenSize } from '../../utils/device'
import { colors } from '../../utils/styles'
import images from '../../utils/images'

const splashVideo = require('../../../assets/videos/fabletics_splash.mp4')

type Props = {

}

class SplashScreen extends Component < Props > {

	// STATIC PUBLIC PROPS
	static screenName = 'SPLASH_SCREEN'

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Video
					source={splashVideo}
					style={styles.backgroundVideo}
					muted={true}
					repeat={true}
					resizeMode={'cover'}
				/>
				<View style={styles.container}>
					<SafeAreaView style={{ flex: 1 }}>
						<View style={{ flex: 1 }}/>
						<Image source={images.logoBlack} style={styles.logo}/>
						<TouchableOpacity style={styles.button}>
							<Text style={styles.buttonText}>{'GET STARTED'}</Text>
						</TouchableOpacity>
					</SafeAreaView>
				</View>
			</View>
		)
		
	}

}

const styles = StyleSheet.create({
	backgroundVideo: {
		flex: 1
	},
	container: {
		position: 'absolute',
		height: screenSize.height,
		width: screenSize.width,
	},
	logo: {
		width: screenSize.width - 160,
		height: 80,
		resizeMode: 'contain',
		tintColor: 'white',
		alignSelf: 'center'
  },
	button: {
		backgroundColor: colors.red,
		margin: 32,
		padding: 20
	},
	buttonText: {
		color: 'white',
		fontSize: 18,
		textAlign: 'center',
		fontWeight: '500',
		fontFamily: 'Helvetica'
	}
})

export default SplashScreen 
