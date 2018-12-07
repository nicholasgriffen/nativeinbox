import React from 'react'
import { Text, View } from 'react-native'

export const Message = props => {
    const { message, style, onMessagePress } = props
    return (
      <Text 
      style={style}
      onPress={onMessagePress(message.id)}>
      Subject: { message.subject }
      { message.expanded && <Text>{"\n"}{`Body: ${ message.body }`}</Text> }
      </Text>
  )
}