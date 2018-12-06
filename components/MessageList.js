import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

export const MessageList = props =>  {
    return (
      <View>
        <FlatList 
        data={props.messages} 
        renderItem={({item: message}) => <Text style={styles.message}>
        {`${message.subject}`}
        </Text>}
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