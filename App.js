import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
import { MaterialCommunityIcons, FontAwesome } from 'react-native-vector-icons'

import MyList from './app/screens/MyList'
import Todo from './app/screens/Todo'
import Settings from './app/screens/Settings'

const Tabs = TabNavigator({
  MyList: {
    screen: MyList,
    navigationOptions: {
      tabBarLabel: 'My List',
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ tintColor }) => (
        <Icon name="list" size={35} color={tintColor} />
      ),
    },
  },
  Recommendations: {
    screen: Todo,
    navigationOptions: {
      tabBarLabel: 'Recommended',
      // eslint-disable-next-line react/prop-types
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
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="bell" size={27} color={tintColor} />
      ),
    },
  },
  Profile: {
    screen: Todo,
    navigationOptions: {
      tabBarLabel: 'Profile',
      // eslint-disable-next-line react/prop-types
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
      screen: Settings,
    },
  },
  {
    mode: 'modal',
    navigationOptions: {
      headerStyle: {
        paddingHorizontal: 12,
      },
      headerTintColor: '#807F83',
    },
  },
)

export default () => <Root />
