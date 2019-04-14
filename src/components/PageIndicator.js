// @flow

import React from 'react'
import {
	StyleSheet,
	View
} from 'react-native'

import { colors } from '../utils/styles'

type Props = {
	pageCount: number,
	selectedPageIndex: number
}

export const PageIndicator = (props: Props) => {

	const { pageCount, selectedPageIndex } = props

	return (
		<View style={{flexDirection: 'row'}}>
        {
          Array.apply(null, {length: pageCount}).map((x, i) => {
            return (
              <View key={i} style={[
                styles.pageIndicator,
                {
                  opacity: selectedPageIndex === i ? 1 : 0.2
                }
              ]} />
            )
          })
        }
      </View>
	)

}

const styles = StyleSheet.create({
	pageIndicator: {
    height: 8,
    width: 8,
    borderRadius: 4,
    margin: 3,
		backgroundColor: colors.black
  }
})
