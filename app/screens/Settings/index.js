import React, { Component } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'

import { gray } from '../../services/styles'

class Settings extends Component {
  static navigationOptions = ({ navigation: { goBack } }) => ({
    headerLeft: (
      <TouchableOpacity onPress={() => goBack()}>
        <View>
          <Text style={{ color: gray, fontWeight: 'bold' }}>Close</Text>
        </View>
      </TouchableOpacity>
    ),
  })

  render() {
    return <View />
  }
}

export default Settings
