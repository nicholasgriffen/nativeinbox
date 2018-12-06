import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import { MessageList } from './components/MessageList';

import { Card } from 'react-native-paper';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = { messages: [] }
    this.API = 'https://gschool-api.herokuapp.com/api/messages'
  }

  componentWillMount = async () => {
    const messages = await fetch(this.API).then(res => res.json())
    this.setState({
      messages
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>INBOX</Text>
        <Card>
          <MessageList messages={this.state.messages}/>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
