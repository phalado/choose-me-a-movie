import React from "react";
import { DimensionValue, Text, TouchableOpacity } from "react-native";
import styles from '../styles/CustomButton'

const CustomButton = (props: {
  text: string
  height?: DimensionValue
  width?: DimensionValue
  onPress: () => any
  disabled?: boolean
}) => {
  const { text, height, width, onPress } = props
  const disabled = props.disabled || false
  const propedStyles = styles({ height, width, disabled })

  return (
    <TouchableOpacity style={propedStyles.container} onPress={onPress} disabled={disabled}>
      <Text style={propedStyles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton;
