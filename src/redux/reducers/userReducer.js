// @flow

import type { UserStateType } from '../../types'
import * as actionTypes from '../actions/actionTypes'

const initialState: UserStateType = {
    onboardingSurveyResults: null
}

export default (state: UserStateType = initialState, action: any = {}) => {
    switch (action.type) {
        case actionTypes.UPDATE_USER_PROFILE:
            const userState = action.payload
            return userState
        default:
            return state
    }
}
