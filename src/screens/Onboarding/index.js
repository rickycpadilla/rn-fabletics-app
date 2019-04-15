// @flow

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as reduxActions from '../../redux/actions'
import type {
	UserStateType,
	UserProfileType,
	OnboardingOptionType,
	ExerciseType,
	ExercisePlaceType,
	ColorPaletteType,
	BodyTypeType,
	ClothesSize
} from '../../types'
import { screenSize } from '../../utils/device'
import { onboardingScreenQuestions } from './constants'

import Onboarding from './Onboarding'

type Props = {
	userState: UserStateType,
	actions: any
}

type State = {
	currentPageIndex: number,
	favoriteExercise: ?ExerciseType,
	favoriteExercisePlace: ?ExercisePlaceType,
	favoriteColorPalette: ?ColorPaletteType,
	bodyType: ?BodyTypeType,
	bottom: ?ClothesSize,
	top: ?ClothesSize,
	bra: ?ClothesSize
}

// TODO: Make DRY
class OnboardingScreen extends Component < Props, State > {

	// STATIC PUBLIC PROPS
	static screenName = 'ONBOARDING_SCREEN'

	// REACT COMPONENT PROPS AND METHODS

	state = {
		currentPageIndex: 0,
		favoriteExercise: null,
		favoriteExercisePlace: null,
		favoriteColorPalette: null,
		bodyType: null,
		bottom: null,
		top: null,
		bra: null
	}

	// PRIVATE METHODS

	_onScroll = (e, state) => {
		const { width } = screenSize
		const offsetX = e.nativeEvent.contentOffset.x;
    this.setState({
      currentPageIndex: Math.floor((offsetX - width / 2) / width ) + 1
    });
	}

	_onSelectOption = (option: OnboardingOptionType) => {
		const nextPageIndex = this.state.currentPageIndex + 1
		this.refs.scrollView.scrollTo({
			x: nextPageIndex * screenSize.width,
			y: 0, animated: true
		})
		switch (option.type) {
			case 'yoga':
			case 'run':
			case 'gym':
			case 'cycle':
				this.setState({ favoriteExercise: option.type })
				break
			case 'yoga_studio':
			case 'outdoors':
			case 'gym':
			case 'home':
				this.setState({ favoriteExercisePlace: option.type })
				break
			case 'grayscale':
			case 'warm':
			case 'cool':
			case 'pattern':
				this.setState({ favoriteColorPalette: option.type })
				break
			case 'petite':
			case 'lean':
			case 'curvy':
			case 'athletic':
				this.setState({ bodyType: option.type })
				break
			default: ()=>{}
		}
	}

	_onSelectSize = (type: string, size: ClothesSize) => {
		switch (type) {
			case 'top':
				this.setState({ top: size })
			case 'bottom':
				this.setState({ bottom: size })
			case 'bra':
				this.setState({ bra: size })
			default: () => {}
		}
	}

	_onSubmit = () => {
		const {
			favoriteExercise,
			favoriteExercisePlace,
			favoriteColorPalette,
			bodyType,
			bottom,
			top,
			bra
		} = this.state
		const { updateUserProfile } = this.props.actions
		const userProfile: UserProfileType = {
			onboardingSurveyResults: {
				favoriteExercise,
				favoriteExercisePlace,
				favoriteColorPalette,
				bodyType,
				sizes: {
					bottom,
					top,
					bra
				},
			}
		}
		updateUserProfile(userProfile)
	}
 
	// RENDER UI

	render() {
		return (
			<Onboarding
				ref={'scrollView'}
				currentPageIndex={this.state.currentPageIndex}
				onboardingScreenQuestions={onboardingScreenQuestions}
				onScroll={this._onScroll}
				onSelectOption={this._onSelectOption}
				onSelectSize={this._onSelectSize}
				onSubmit={this._onSubmit}
				favoriteExercise={this.state.favoriteExercise}
				favoriteExercisePlace={this.state.favoriteExercisePlace}
				favoriteColorPalette={this.state.favoriteColorPalette}
				bodyType={this.state.bodyType}
				bottom={this.state.bottom}
				top={this.state.top}
				bra={this.state.bra}
			/>
		)
	}

}

// SETUP REDUX STATE AND ACTIONS

function mapStateToProps(state, ownProps) {
	const { userState } = state
	return {
		userState
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(reduxActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingScreen)
