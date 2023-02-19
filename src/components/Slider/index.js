import React from 'react'
import { FlatList, Text, View, Image, TouchableOpacity } from 'react-native';
import ImageComponent from '../ImageComponent';
import { styles } from './styles';

const Slider = ({ title, images, onPress }) => {
    const handle = ({ item }) => {
        return (
            <TouchableOpacity activeOpacity={0.6}>
                <ImageComponent onPress={onPress} style={styles.image} id={item?.id} url={item?.posterUrl} />
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            <FlatList
                horizontal
                inverted
                showsHorizontalScrollIndicator={false}
                data={images.reverse()}
                renderItem={handle}
            />
        </View>
    )
}

export default React.memo(Slider);
