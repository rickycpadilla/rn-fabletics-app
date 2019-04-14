// @flow

import { Navigation, ScreenVisibilityListener } from 'react-native-navigation'

import OnboardingScreen from './Onboarding'
import SplashScreen from './Splash'
import FeaturedScreen from './Featured'

const screens = [
    OnboardingScreen,
    FeaturedScreen
]

export function registerScreens(store: any, provider: any) {
    // Register screens without Redux wrapper
    Navigation.registerComponent(SplashScreen.screenName, () => SplashScreen)
    // Register screens with Redux wrapper
    screens.map( screen =>
        Navigation.registerComponentWithRedux(screen.screenName, () => screen, provider, store)
    )
}
