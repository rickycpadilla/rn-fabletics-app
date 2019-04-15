// @flow

import React, { Component } from 'react'
import { Navigation } from 'react-native-navigation'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as reduxActions from '../../redux/actions'
import type { UserStateType, ProductPreviewType } from '../../types'
import { screenSize } from '../../utils/device'
import { mockFeaturedSections } from '../../utils/mockData'
import { colors, fonts } from '../../utils/styles'
import images from '../../utils/images'

import Featured, { initialImageHeight } from './Featured'

type Props = {
  userState: UserStateType,
  componentId: string
}

type State = {
  heroImageHeight: number,
  topBarBackgroundVisble: boolean
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
      },
      topBar: {
				drawBehind: true,
        backButton: { visible: false },
        background: {
					color: 'transparent',
					translucent: true,
					blur: false
        },
        title: {
          text: '',
          color: colors.black,
          fontFamily: fonts.semiBold
        },
        leftButtons: [],
        rightButtons: [{
          id: 'cart',
          icon: images.shopping_cart,
          color: 'white'
        }]
			}
    }
  }

	// REACT COMPONENT PROPS AND METHODS

	state = {
    heroImageHeight: initialImageHeight,
    topBarBackgroundVisble: false
	}

	componentWillReceiveProps(){

	}

  // PRIVATE METHODS
  _onScroll = (e: any) => {
    var offsetY = e.nativeEvent.contentOffset.y;

    // Expand / contract Hero image based on scroll position.
    const heroImageHeight = initialImageHeight - offsetY
    if (heroImageHeight > 50) {
      this.setState({
        heroImageHeight
      })
    }

    const topBarBackgroundVisble = offsetY > 100

    if (topBarBackgroundVisble === this.state.topBarBackgroundVisble) return
    this._changeTopBarStyles(topBarBackgroundVisble)
    this.setState({ topBarBackgroundVisble })
    
  }

  _changeTopBarStyles = (backgroundVisble: boolean) => {
    Navigation.mergeOptions(this.props.componentId, {
      statusBar: {
        style: backgroundVisble ? 'dark' : 'light'
      },
      topBar: {
        background: {
          color: backgroundVisble ? 'white' : 'transparent',
        },
        title: {
          text: backgroundVisble ? 'VIP Deals' : ''
        },
        rightButtons: [{
          id: 'cart',
          icon: images.shopping_cart,
          color: backgroundVisble ? colors.black : 'white'
        }]
      }
    })
  }

  _onSelectProduct = (product: ProductPreviewType) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'PRODUCT_DETAIL_SCREEN',
        passProps: {
          product: product
        }
      }
    })
  }

	// RENDER UI

	render() {
    const { heroImageHeight } = this.state
		return (
			<Featured
        heroImageHeight={heroImageHeight}
        onScroll={this._onScroll}
        featuredSections={mockFeaturedSections}
        onSelectProduct={this._onSelectProduct}
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
