// @flow

import * as actionTypes from './actionTypes'

import type { UserProfileType } from '../../types'

export function updateUserProfile(profile: UserProfileType) {
    return {
        type: actionTypes.UPDATE_USER_PROFILE
    }
}
