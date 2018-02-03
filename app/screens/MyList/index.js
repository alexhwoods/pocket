import React from 'react'
import { ScrollView } from 'react-native'
import { List, ListItem } from 'react-native-elements'

const articles = [{ url: 'www.example.com/article1' }]

const MyList = () => (
  <ScrollView>
    <List>
      {articles.map(article => (
        <ListItem key={article.url} title={article.url} />
      ))}
    </List>
  </ScrollView>
)

export default MyList
