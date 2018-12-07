import React from 'react'
import { Button, TextInput, View } from 'react-native'

export default class ComposeForm extends React.Component {
  
  constructor() {
    super()
    this.state = {
      body: '',
      subject: '',
    }
  }

  render() {
    const { composing, onSendPress } = this.props
      return ( 
        !composing 
        ? null 
        : <View>
            <TextInput 
              placeholder={"Subject..."}
              onChangeText={(subject) => {
                this.setState({
                  ...this.state, 
                  subject
                })
              }}
              value={this.state.subject}
            />
            <TextInput 
              placeholder={"Message body..."}
              multiline={true}
              onChangeText={(body) => {
                this.setState({
                  ...this.state, 
                  body
                })
              }}
              value={this.state.body}
            />
            <Button 
              title={"Send Message"}
              onPress={onSendPress({
                body: this.state.body, 
                subject: this.state.subject
              })}
            />
          </View>
      )
    }
}