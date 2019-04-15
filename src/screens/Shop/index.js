// @flow

import React, { Component } from 'react'
import { View, Text } from 'react-native'

type Props = {

}

export default class ShopScreen extends Component < Props > {
  // STATIC PUBLIC PROPS
  static screenName = 'SHOP_SCREEN'
  
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{'Placeholder'}</Text>
      </View>
    )
  }
}