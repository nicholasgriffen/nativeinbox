import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

export const MessageList = props =>  {
    return (
      <View>
        <FlatList 
        data={props.messages} 
        renderItem={({item: message}) => ( 
          <Message 
            style={styles.message}
            message={message}
            onMessagePress={props.onMessagePress}>
          </Message>
        )}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  message: {
    padding: 15,
    marginBottom: 5
  }
})