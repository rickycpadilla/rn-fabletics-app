// @flow

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as reduxActions from '../../redux/actions'
import type { UserStateType, OnboardingOptionType } from '../../types'
import { screenSize } from '../../utils/device'
import { mockFeaturedSections } from '../../utils/mockData'

import StoreLocator from './StoreLocator'

type Props = {
	userState: UserStateType
}

type State = {

}

class StoreLocatorScreen extends Component < Props, State > {

	// STATIC PUBLIC PROPS
	static screenName = 'STORE_LOCATOR_SCREEN'

  // NAVIGATOR STYLE
  static options(passProps) {
    return {
      statusBar: {
        visible: true,
        style: 'light'
      }
    }
  }

	// REACT COMPONENT PROPS AND METHODS

	state = {
	}

	componentWillReceiveProps(){

	}

  // PRIVATE METHODS

	// RENDER UI

	render() {
		return (
			<StoreLocator
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

export default connect(mapStateToProps, mapDispatchToProps)(StoreLocatorScreen)
