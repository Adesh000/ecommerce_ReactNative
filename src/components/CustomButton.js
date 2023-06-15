import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({bg, title, color, onClick}) => {
  return (
    <TouchableOpacity style={styles.btn} onClick={onClick}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  btn: {
    width: Dimensions.get('window').width-40,
    height: 50
  }
})