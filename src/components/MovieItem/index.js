import React from 'react'
import { Pressable, Image, Text, View } from 'react-native';
import Button from '../Button';
import ImageComponent from '../ImageComponent';
import { styles } from './styles';

const MovieItem = ({ id, title, year, posterUrl, genres, onPress }) => {
    return (
        <Pressable style={styles.container} onPress={() => onPress(id)}>
            <View style={styles.contact}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.year}>{year}</Text>
                <View style={styles.genresContainer}>
                    {genres?.slice(0, 3)?.map((genre, index) => (<Text style={styles.genre} key={index}>{genre}</Text>))}
                </View>
            </View>
            <ImageComponent onPress={() => onPress(id)} resizeMode='stretch' url={posterUrl} style={styles.image} />

            <Button onPress={() => onPress(id)} style={styles.button} text="مشاهده / دانلود" />
        </Pressable>
    )
}

export default React.memo(MovieItem);
