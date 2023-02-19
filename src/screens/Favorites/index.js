import React from 'react'
import { Text, View, FlatList, SafeAreaView } from 'react-native';
import { styles } from './styles';

import movies from '../../data/movies.json';
import MovieItem from '../../components/MovieItem';

const Favorites = ({ navigation }) => {

    const myMovies = movies.slice(movies.length - 13, movies.length);

    const MovieListRenderItem = ({ item }) => {
        return (
            <MovieItem onPress={showDetail} {...item} posterUrl={item?.posterUrl} />
        )
    }

    const showDetail = (e) => {
        navigation.navigate("Detail", { id: e })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>لیست مورد علاقه</Text>

            <View style={styles.line} />

            <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.movieList}
                data={myMovies}
                renderItem={MovieListRenderItem}
                key={(_, i) => i.toString()}
            />
        </SafeAreaView>
    )
}

export default React.memo(Favorites);
