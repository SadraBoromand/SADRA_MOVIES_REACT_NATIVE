import React from 'react'
import { Image, View, TextInput } from 'react-native';
import colors from '../../utils/colors';
import { styles } from './styles';

const SearchInput = ({ value, onChange }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/tabs/search_active.png')} />
            <TextInput
                value={value}
                onChangeText={onChange}
                style={styles.input}
                placeholderTextColor={colors.white}
                placeholder='جستجو براساس نام فیلم...' />
        </View>
    )
}

export default React.memo(SearchInput);
