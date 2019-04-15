// @flow

import * as actionTypes from './actionTypes'
import localStorage from '../../utils/localStorage'

import type { UserProfileType } from '../../types'

export function updateUserProfile(user: UserProfileType) {
    localStorage.storeUser(user)
    return {
        type: actionTypes.UPDATE_USER_PROFILE,
        payload: user
    }
}
