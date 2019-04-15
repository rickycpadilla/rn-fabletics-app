// @flow

import type { ClothesSize } from '../types'

export const getSizeString = (sizeAbbreviation: ClothesSize) => {
  let sizeString = ''
  switch (sizeAbbreviation) {
    // 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | '1x' | '2x' | '3x'
    case 'xxs':
      sizeString = 'XX Small'
      break
    case 'xs':
      sizeString = 'X Small'
      break
    case 's':
      sizeString = 'Small'
      break
    case 'm':
      sizeString = 'Medium'
      break
    case 'l':
      sizeString = 'Large'
      break
    case 'xl':
      sizeString = 'X Large'
      break
    case 'xxl':
      sizeString = 'XX Large'
      break
    default: sizeString = sizeAbbreviation
  }
  return sizeString
}
