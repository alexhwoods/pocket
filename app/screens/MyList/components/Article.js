import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  title: {
    fontSize: 10,
  },
})

class Article extends React.PureComponent {
  onPress = () => {
    console.log('an article has been pressed')
  }

  render() {
    const { title, url, tags } = this.props
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.url}>{url}</Text>
          <Text>{tags}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  tags: PropTypes.array, // eslint-disable-line react/forbid-prop-types
}

Article.defaultProps = {
  tags: [],
}

export default Article
