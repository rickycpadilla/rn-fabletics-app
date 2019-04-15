// @flow

import { Navigation, ScreenVisibilityListener } from 'react-native-navigation'

import OnboardingScreen from './Onboarding'
import SplashScreen from './Splash'
import FeaturedScreen from './Featured'
import StoreLocatorScreen from './StoreLocator'
import ShopScreen from './Shop'
import ProductDetailScreen from './ProductDetail'

const screens = [
	SplashScreen,
	ShopScreen
]

const reduxScreens = [
	OnboardingScreen,
	FeaturedScreen,
	StoreLocatorScreen,
	ProductDetailScreen
]

export function registerScreens(store: any, provider: any) {
	// Register screens without Redux wrapper
	screens.map( screen => 
		Navigation.registerComponent(screen.screenName, () => screen)
	)
	
	// Register screens with Redux wrapper
	reduxScreens.map( screen =>
		Navigation.registerComponentWithRedux(screen.screenName, () => screen, provider, store)
	)
}
