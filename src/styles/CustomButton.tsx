import { DimensionValue, StyleSheet } from 'react-native';

const CustomButtonStyles = (props: {
  height: DimensionValue | undefined
  width: DimensionValue | undefined
  disabled: boolean
}) => StyleSheet.create({
  container: {
    height: props.height || 60,
    width: props.width || '80%',
    backgroundColor: '#29C4F8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    opacity: props.disabled ? 0.5 : 1
  },
  text: {
    color: 'white',
    fontSize: 20
  }
})

export default CustomButtonStyles
