// @flow

import React from 'react'
import {
	StyleSheet,
	View,
	FlatList,
	Text,
	TouchableOpacity,
	ImageBackground
} from 'react-native'
import type { ClothesSize } from '../types'
import { screenSize } from '../utils/device'
import { colors, fonts } from '../utils/styles'
import { Button } from './'

// TODO: Move question and answer contents out of this dumb component.
type SizeOption = {
  name: string,
  value: ClothesSize
}
const sizeOptions: Array<SizeOption> = [
  {
    name: 'XXS | 0-2',
    value: 'xxs'
  },
  {
    name: 'XS | 4',
    value: 'xs'
  },
  {
    name: 'S | 6',
    value: 's'
  },
  {
    name: 'M | 8',
    value: 'm'
  },
  {
    name: 'L | 10-12',
    value: 'l'
  },
  {
    name: 'XL | 14-16',
    value: 'xl'
  },
  {
    name: 'XXL | 18-20',
    value: 'xxl'
  },
  {
    name: '1X | 18',
    value: '1x'
  },
  {
    name: '2X | 20',
    value: '2x'
  },
  {
    name: '3X | 22-24',
    value: '3x'
  }
]

type Props = {
  onPressSubmit: () => void,
  onSelectSize: (type: string, size: ClothesSize) => void
}

// TODO: Make DRY
export const OnboardingSizeSurvey = (props: Props) => {
	const { onPressSubmit, onSelectSize } = props

	return (
		<View style={styles.container}>

      <Text style={styles.questionLabel}>{'Your bottom size preference'}</Text>
      <View style={styles.optionsContainer}>
      {
        sizeOptions.map((option, i) => {
          return (
            <TouchableOpacity key={i} onPress={() => onSelectSize('bottom', option.value)}>
              <View style={styles.optionButton}>
                <Text style={styles.buttonText}>{option.name}</Text>
              </View>
            </TouchableOpacity>
          )
        })
      }
      </View>

      <Text style={styles.questionLabel}>{'Your top size preference'}</Text>
      <View style={styles.optionsContainer}>
      {
        sizeOptions.map((option, i) => {
          return (
            <TouchableOpacity key={i} onPress={() => onSelectSize('top', option.value)}>
              <View style={styles.optionButton}>
                <Text style={styles.buttonText}>{option.name}</Text>
              </View>
            </TouchableOpacity>
          )
        })
      }
      </View>

      <Text style={styles.questionLabel}>{'Your bra size preference'}</Text>
      <View style={styles.optionsContainer}>
      {
        sizeOptions.map((option, i) => {
          return (
            <TouchableOpacity key={i} onPress={() => onSelectSize('bra', option.value)}>
              <View style={styles.optionButton}>
                <Text style={styles.buttonText}>{option.name}</Text>
              </View>
            </TouchableOpacity>
          )
        })
      }
      </View>
      <View style={{flex: 1}}/>
      <Button
        title={"Let's Go"}
        onPress={onPressSubmit}
      />
			
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: screenSize.width,
		flexDirection: 'column',
		padding: 18
	},
	questionLabel: {
		fontSize: 20,
		fontFamily: fonts.semiBold,
    textAlign: 'center',
    marginTop: 14,
    marginBottom: 8
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  optionButton: {
    padding: 4,
    margin: 3,
    borderColor: colors.purple,
    borderWidth: 1
  },
  buttonText: {
    fontFamily: fonts.regular,
    color: colors.purple,
    fontSize: 14
  }
})
