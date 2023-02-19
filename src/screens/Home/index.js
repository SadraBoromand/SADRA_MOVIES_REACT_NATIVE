import React, { useState } from 'react'
import { View, Text, FlatList, Image, ScrollView } from 'react-native'
import styles from './styles';
import GenreItem from '../../components/GenreItem'

import genres from '../../data/genres.json';
import movies from '../../data/movies.json';
import ImageCarousel from '../../components/ImageCarousel';
import Slider from '../../components/Slider';
import GenreList from '../../components/GenreList';

const Home = ({ navigation }) => {

    const newMovies = movies.filter(movie => movie.year > 2010).sort(movie => movie.year);
    const oldMovies = movies.filter(movie => movie.year < 2010).sort(movie => movie.year);

    const [genreSelected, setGenreSelected] = useState('All');

    const GenreRenderItem = ({ item, index }) => {
        return <GenreItem
            onPress={() => {
                setGenreSelected(item);
                navigation.navigate('Search', { genre: item });
            }}
            style={genreSelected === item ? styles.genreSelected : null}
            text={item} />;
    }

    const showDetail = (e) => {
        navigation.navigate("Detail", { id: e })
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container}>
            <Image style={styles.logo} resizeMode="stretch" source={require('../../assets/logo.png')} />

            <View style={styles.genreContainer}>
                <FlatList
                    style={styles.genresList}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={['None', ...genres]}
                    renderItem={GenreRenderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
                <Text style={styles.genreText}>ژانرها :</Text>
            </View>

            <ImageCarousel onPress={showDetail} movies={newMovies.slice(0, 5)} />

            <Slider onPress={showDetail} title="فیلم های جدید" images={newMovies.slice(0, 20)} />
            <Slider onPress={showDetail} title="فیلم های قدیمی" images={oldMovies.slice(0, 20)} />

        </ScrollView>
    )
}

export default React.memo(Home);
