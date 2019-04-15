// @flow

import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import configureStore from './redux'

import localStorage from './utils/localStorage'
import type { UserProfileType } from './types'
import { registerScreens } from './screens'
import SplashScreen from './screens/Splash'
import OnboardingScreen from './screens/Onboarding'
import FeaturedScreen from './screens/Featured'
import StoreLocatorScreen from './screens/StoreLocator'
import ShopScreen from './screens/Shop'
import ProductDetailScreen from './screens/ProductDetail'
import images from './utils/images'

const store = configureStore()

registerScreens(store, Provider)

export const setupTabBar = (user: UserProfileType) => {
  return {
    bottomTabs: {
      children: [
      {
        stack: {
          children: [
            {
              component: {
                name: ProductDetailScreen.screenName,
                passProps: {
                  user
                }
              }
            },
            {
              component: {
                name: FeaturedScreen.screenName,
                passProps: {
                  user
                }
              }
            }
          ],
          options: {
            bottomTab: {
              text: 'VIP Deals',
              icon: images.whatshot,
              testID: 'FIRST_TAB_BAR_BUTTON'
            }
          }
        }
      },
      {
        component: {
          name: ShopScreen.screenName,
          passProps: {
            user
          },
          options: {
            bottomTab: {
              text: 'Shop',
              icon: images.shopping_basket,
              testID: 'SECOND_TAB_BAR_BUTTON'
            }
          }
        }
      },
      {
        component: {
          name: StoreLocatorScreen.screenName,
          passProps: {
            user
          },
          options: {
            bottomTab: {
              text: 'Store Locator',
              icon: images.store_mall_directory,
              testID: 'THIRD_TAB_BAR_BUTTON'
            }
          }
        }
      },
      {
        component: {
          name: ShopScreen.screenName,
          passProps: {
            user
          },
          options: {
            bottomTab: {
              text: 'Profile',
              icon: images.person,
              testID: 'FOURTH_TAB_BAR_BUTTON'
            }
          }
        }
      }
    ]
    }
  }
}

const splash = {
  stack: {
    children: [
      {
        component: {
          name: OnboardingScreen.screenName,
          passProps: {
            text: 'This is tab 1'
          }
        }
      },
      {
        component: {
          name: SplashScreen.screenName,
          passProps: {
            text: 'This is 1'
          }
        }
      },
      
    ],
    options: {
      topBar: {
        visible: false
      },
      statusBar: {
        visible: true,
        style: 'light'
      }
    }
  }
}

const startApp = async () => {
  let root: Navigation.root
  const user: ?UserProfileType = await localStorage.getUser()
  if (user) {
    root = setupTabBar(user)
  } else {
    root = splash
  }
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({ root })
  })
}

startApp()
