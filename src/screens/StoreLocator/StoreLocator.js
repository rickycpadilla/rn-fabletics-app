// @flow

import React from 'react'
import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	TouchableOpacity,
	SafeAreaView
} from 'react-native'
import MapView, { Marker } from 'react-native-maps'

import { screenSize } from '../../utils/device'
import { colors, fonts } from '../../utils/styles'
import images from '../../utils/images'


type Props = {

}

export default (props: Props,) => {

	return (
		<View style={styles.container}>
      <MapView
      style={{flex: 1}}
        initialRegion={{
          latitude: 33.558330,
          longitude: -117.669170,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{latitude: 33.558330, longitude: -117.669170}}
          title={'Mission Viejo, CA'}
          description={'Shops at Mission Viejo'}
        />
      </MapView>
    </View>
	)

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  }
})
