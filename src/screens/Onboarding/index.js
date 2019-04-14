// @flow

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as reduxActions from '../../redux/actions'

import Onboarding from './Onboarding'

type Props = {

}

type State = {

}

class OnboardingScreen extends Component < Props, State > {

    // STATIC PUBLIC PROPS
    static screenName = 'ONBOARDING_SCREEN'

    // NAVIGATOR STYLE

    // REACT COMPONENT PROPS AND METHODS

    // PRIVATE METHODS

    _onScroll = () => {

    }

    // RENDER UI

    render() {
        return (
            <Onboarding
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

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingScreen)
