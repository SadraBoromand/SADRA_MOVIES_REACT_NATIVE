import React from 'react'
import { Text, View } from 'react-native'
import Button from '../Button';
import ImageComponent from '../ImageComponent';
import { styles } from './styles';

const CarouselItem = ({ id, title, year, genres, posterUrl, onPress }) => {

    return (
        <View style={styles.container}>
            <View style={styles.contact}>
                <Text style={styles.title}>{title.length > 15 ? `${title.slice(0, 15)}...` : title}</Text>
                <Text style={styles.subtitle}>{year}</Text>
                <View style={styles.genreContainer}>
                    {genres.slice(0, 3).map((genre, index) => (<Text key={index} style={styles.genre}>{genre}</Text>))}
                </View>
                <Button onPress={() => onPress(id)} style={styles.button} text='مشاهده / دانلود' />
            </View>
            <ImageComponent onPress={() => onPress(id)} resizeMode='stretch' url={posterUrl} style={styles.image} />
        </View>
    )
}

export default React.memo(CarouselItem);
