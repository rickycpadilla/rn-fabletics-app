// @flow

import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import configureStore from './redux'

import { registerScreens } from './screens'
import FeaturedScreen from './screens/Featured'
import StoreLocatorScreen from './screens/StoreLocator'
import ShopScreen from './screens/Shop'
import ProductDetailScreen from './screens/ProductDetail'
import images from './utils/images'

const store = configureStore()

registerScreens(store, Provider)

const tabBar = {
  bottomTabs: {
    children: [
    {
      stack: {
        children: [
          {
            component: {
              name: ProductDetailScreen.screenName,
              passProps: {
                text: 'This is tab 1'
              }
            }
          },
          {
            component: {
              name: FeaturedScreen.screenName,
              passProps: {
                text: 'This is tab 1'
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
          text: 'This is tab 2'
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
          text: 'This is tab 3'
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
          text: 'This is tab 4'
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

const productTestRoot = {
  
  component: {
    name: 'PRODUCT_DETAIL_SCREEN'
  }
  
}

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: tabBar
  });
});
