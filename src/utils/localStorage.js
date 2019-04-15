// @flow

import AsyncStorage from '@react-native-community/async-storage'

import type { UserProfileType } from '../types'

export default {

  storeUser: async (user: UserProfileType) => {
    try {
      await AsyncStorage.setItem('@USER', JSON.stringify(user))
    } catch (e) {
      // throw error
    }
  },

  getUser: async () => {
    try {
      const user: UserProfileType = AsyncStorage.getItem('@USER')
      return user
    } catch (e) {
      return null
    }
  }

  // getUser: (callback: (user: UserProfileType) => any) => {
  //   AsyncStorage.getItem('@USER', (err, result) => {
  //     const user: UserProfileType = JSON.parse(result);
  //     callback(user);
  //   })
  // }

}
