// @flow

import { Dimensions } from 'react-native';

const screenDimensions = Dimensions.get('window');
export const screenSize = {
  width: screenDimensions.width,
  height: screenDimensions.height
};
