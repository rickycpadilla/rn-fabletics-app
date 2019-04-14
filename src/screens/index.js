// @flow

import { Navigation, ScreenVisibilityListener } from 'react-native-navigation'

import OnboardingScreen from './Onboarding'

const screens = [
    OnboardingScreen
]

export function registerScreens(store: any, provider: any) {
    screens.map( screen =>
        Navigation.registerComponentWithRedux(screen.screenName, () => OnboardingScreen, provider, store)
    )
}
