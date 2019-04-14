// @flow

import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import configureStore from './redux'

import { registerScreens } from './screens'
// import OnboardingScreen from './screens/Onboarding'

const store = configureStore()

registerScreens(store, Provider)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'FEATURED_SCREEN'
      }
    }
  });
});
