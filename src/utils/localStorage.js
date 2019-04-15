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
      const userJson =  await AsyncStorage.getItem('@USER')
      const user: UserProfileType = JSON.parse(userJson)
      return user
    } catch (e) {
      return null
    }
  }

}
