import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'
import { Card } from 'react-native-paper'

import { Constants } from 'expo'

import { MessageList } from './components/MessageList'
import ComposeForm from './components/ComposeForm'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = { 
      composing: false,
      messages: [] 
    }
    this.API = 'https://gschool-api.herokuapp.com/api/messages'
  }

  componentWillMount = async () => {
    const messages = await fetch(this.API).then(res => res.json())
    this.setState({
      ...this.state,
      messages
    })
  }
  onMessagePress = id => e => {
    this.setState({
      ...this.state,
      messages: this.state.messages.map(message => {
        if (message.id === id) {
          message.expanded ? message.expanded = false : message.expanded = true
        }
        return message
      })
    })
  }
  
  onComposePress = () =>{
    this.setState({
      ...this.state, 
      composing: !this.state.composing
    })
  }
  onSendPress = ({body, subject}) => async e => {
    const request = await fetch(this.API, {
      method: 'POST',
      body: { subject, body }
    })
    const newMessage = await request.json()
    this.setState({
      ...this.state,
      composing: false,
      messages: [...this.state.messages, newMessage]
    })
  }  
  render() {
    return (
      <View style={styles.container}>
        <ComposeForm 
          composing={this.state.composing}
          onSendPress={this.onSendPress}
        />
        <Button 
          title={this.state.composing ? "Cancel" : "Compose Message"}
          onPress={this.onComposePress}/>
        <Card>
          <MessageList 
            messages={this.state.messages} 
            onMessagePress={this.onMessagePress}/>
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
