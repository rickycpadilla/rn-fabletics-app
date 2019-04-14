// @flow

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as reduxActions from '../../redux/actions'
import type { UserStateType, OnboardingOptionType } from '../../types'
import { screenSize } from '../../utils/device'

import Featured, { initialImageHeight } from './Featured'

type Props = {
	userState: UserStateType
}

type State = {
  heroImageHeight: number
}

class FeaturedScreen extends Component < Props, State > {

	// STATIC PUBLIC PROPS
	static screenName = 'FEATURED_SCREEN'

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
		heroImageHeight: initialImageHeight
	}

	componentWillReceiveProps(){

	}

  // PRIVATE METHODS
  _onScroll = (e: any) => {
    var offsetY = e.nativeEvent.contentOffset.y;

    // Expand / contract Hero image based on scroll position.
    const heroImageHeight = initialImageHeight - offsetY;
    if (heroImageHeight > 50) {
      this.setState({
        heroImageHeight
      });
    };
  }

	// RENDER UI

	render() {
    const { heroImageHeight } = this.state
		return (
			<Featured
        heroImageHeight={heroImageHeight}
        onScroll={this._onScroll}
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

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedScreen)
