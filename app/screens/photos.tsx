import { StyleSheet } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const PhotosScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Photos</ThemedText>
    </ThemedView>
  )
}

export default PhotosScreen

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
  }
})