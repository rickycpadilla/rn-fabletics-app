// @flow

import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native'

type Props = {
    onScroll: (event: any, state: any) => void
}

export default (props: Props) => {

    const {
        onScroll
    } = props

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal={true}
                decelerationRate={0}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                scrollEventThrottle={8}
                onScroll={(e, state) => onScroll(e, state)}
                automaticallyAdjustContentInsets={false}
            >
            
          </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  }
})
