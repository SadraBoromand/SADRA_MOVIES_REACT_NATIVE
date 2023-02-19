import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles';

const GenreItem = ({ text, onPress, style }) => {
    return (
        <TouchableOpacity style={[styles.container, style]} activeOpacity={0.8} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default React.memo(GenreItem);
