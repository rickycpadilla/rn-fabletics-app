// @flow

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as reduxActions from '../../redux/actions'
import type { UserStateType, OnboardingOptionType } from '../../types'
import { screenSize } from '../../utils/device'
import { onboardingScreenQuestions } from './constants'

import Onboarding from './Onboarding'

type Props = {
	userState: UserStateType
}

type State = {
	currentPageIndex: number
}

class OnboardingScreen extends Component < Props, State > {

	// STATIC PUBLIC PROPS
	static screenName = 'ONBOARDING_SCREEN'

	// NAVIGATOR STYLE

	// REACT COMPONENT PROPS AND METHODS

	state = {
		currentPageIndex: 0
	}

	componentWillReceiveProps(){

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
