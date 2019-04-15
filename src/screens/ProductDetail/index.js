// @flow

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as reduxActions from '../../redux/actions'
import type { UserStateType, ProductPreviewType } from '../../types'
import { screenSize } from '../../utils/device'
import { mockTopPreviews } from '../../utils/mockData'

import ProductDetail, { initialImageHeight } from './ProductDetail'

type Props = {
	userState: UserStateType,
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
		const { product } = this.props
		return (
			<ProductDetail
        heroImageHeight={heroImageHeight}
        onScroll={this._onScroll}
				// product={product}
				product={mockTopPreviews[1]}// TEMPORARY
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
