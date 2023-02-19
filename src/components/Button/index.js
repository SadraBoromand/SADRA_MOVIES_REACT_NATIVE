import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

const Button = ({ text, onPress, style }) => {
    return (
        <TouchableOpacity activeOpacity={0.6} style={[styles.container, style]} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default React.memo(Button);
