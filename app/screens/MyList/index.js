import React, { Component } from 'react'
import { View, FlatList } from 'react-native'

import Article from './components/Article'

const articles = [
  { title: 'Article 1', url: 'www.example.com/article1' },
  { title: 'How to do thing', url: 'wwwwkawjd;fasdf;' },
]

class MyList extends Component {
  renderItem = ({ item }) => <Article {...item} />
  renderSeparator = () => (
    <View
      style={{
        width: '100%',
        height: 0.25,
        backgroundColor: 'rgba(128, 128, 128, 0.5)',
      }}
    />
  )

  render() {
    return (
      <View>
        <FlatList
          data={articles}
          ItemSeparatorComponent={this.renderSeparator}
          keyExtractor={article => article.url}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

export default MyList
