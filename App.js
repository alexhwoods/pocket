import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
import { MaterialCommunityIcons, FontAwesome } from 'react-native-vector-icons'

import MyList from './app/screens/MyList'
import Todo from './app/screens/Todo'

const Tabs = TabNavigator({
  MyList: {
    screen: MyList,
    navigationOptions: {
      tabBarLabel: 'My List',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="list" size={35} color={tintColor} />
      ),
    },
  },
  Recommendations: {
    screen: Todo,
    navigationOptions: {
      tabBarLabel: 'Recommended',
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons
          name="heart-box"
          size={35}
          style={{ marginTop: 4 }}
          color={tintColor}
        />
      ),
    },
  },
  Notifications: {
    screen: Todo,
    navigationOptions: {
      tabBarLabel: 'Notifications',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="bell" size={27} color={tintColor} />
      ),
    },
  },
  Profile: {
    screen: Todo,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="account-circle" size={35} color={tintColor} />
      ),
    },
  },
})

const Root = StackNavigator(
  {
    Tabs: {
      screen: Tabs,
    },
    Settings: {
      screen: Todo,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
)

export default () => <Root />
