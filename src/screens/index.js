// @flow

import { Navigation, ScreenVisibilityListener } from 'react-native-navigation'

import OnboardingScreen from './Onboarding'
import SplashScreen from './Splash'

const screens = [
    OnboardingScreen
]

export function registerScreens(store: any, provider: any) {
    Navigation.registerComponent(SplashScreen.screenName, () => SplashScreen)
    screens.map( screen =>
        Navigation.registerComponentWithRedux(screen.screenName, () => OnboardingScreen, provider, store)
    )
}
