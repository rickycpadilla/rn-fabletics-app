// @flow

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as reduxActions from '../../redux/actions'
import type { UserStateType, UserProfileType, ProductPreviewType } from '../../types'
import { screenSize } from '../../utils/device'
import { colors } from '../../utils/styles'
import images from '../../utils/images'

import ProductDetail, { initialImageHeight } from './ProductDetail'

type Props = {
	userState: UserStateType,
	user: UserProfileType,
	product: ProductPreviewType
}

type State = {
  heroImageHeight: number,

}

class ProductDetailScreen extends Component < Props, State > {

	// STATIC PUBLIC PROPS
	static screenName = 'PRODUCT_DETAIL_SCREEN'

  // NAVIGATOR STYLE
  static options(passProps) {
    return {
      statusBar: {
        visible: true,
        style: 'dark'
      },
      topBar: {
				drawBehind: true,
				backButton:{ color: colors.black, title: '' },
        background: {
					color: 'transparent',
					translucent: true,
					blur: false
				},
				rightButtons: [{
          id: 'cart',
          icon: images.shopping_cart,
          color: colors.black
        }]
			},
			bottomTabs: {
				visible: false
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
	
	_getUserSizeForProduct() {
		const { user, product } = this.props
		let userSize = null
		if (
			user.onboardingSurveyResults &&
			user.onboardingSurveyResults.sizes &&
			product
		) {
			const { sizes } = user.onboardingSurveyResults
			switch (product.type) {
				case 'top':
					userSize = sizes.top
					break
				case 'bottom':
					userSize = sizes.bottom
					break
				case 'bra':
					userSize = sizes.bra
					break
				default: userSize = null
			}
		}
		return userSize
	}

	// RENDER UI

	render() {
		const { heroImageHeight } = this.state
		const { userState, product } = this.props
		const userSize = this._getUserSizeForProduct()
		return (
			<ProductDetail
        heroImageHeight={heroImageHeight}
        onScroll={this._onScroll}
				product={product}
				userSize={userSize}
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailScreen)
