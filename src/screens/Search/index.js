import React, { useState, useEffect } from 'react'
import { SafeAreaView, Image, View, FlatList, Text } from 'react-native';
import GenreList from '../../components/GenreList';
import SearchInput from '../../components/SearchInput';
import { styles } from './styles';

import genres from '../../data/genres.json';
import movies from '../../data/movies.json';
import MovieItem from '../../components/MovieItem';

const Search = ({ navigation, route }) => {
    console.log('Search nav', route?.params?.genre);

    useEffect(() => {
        const genreHome = route?.params?.genre;
        const filterd = movies.filter(movie => movie.genres.includes(genreHome));
        setMoviesFiltered(filterd);
        setGenreSelected(genreHome);
    }, [route])

    const [searchInput, setSearchInput] = useState();
    const [genreSelected, setGenreSelected] = useState("None");
    const [moviesFiltered, setMoviesFiltered] = useState([]);

    const handleSearch = (e) => {
        if (e.length >= 1) {
            if (moviesFiltered?.length > 0) {
                const filterd = moviesFiltered?.filter(movie => movie?.title.toLowerCase().includes(e.toLowerCase()));
                setMoviesFiltered(filterd);
            }
            const filterd = movies?.filter(movie => movie?.title.toLowerCase().includes(e.toLowerCase()));
            setMoviesFiltered(filterd);
        }
    }

    const handleGenreSelected = (e) => {
        setGenreSelected(e);
        if (moviesFiltered?.length > 0) {
            const filterd = moviesFiltered?.filter(movie => movie.genres.includes(e));
            setMoviesFiltered(filterd);
        }
        const filterd = movies?.filter(movie => movie.genres.includes(e));
        setMoviesFiltered(filterd);
    }

    const showDetail = (e) => {
        navigation.navigate("Detail", { id: e })
    }

    const MovieListRenderItem = ({ item }) => {
        return (
            <MovieItem onPress={showDetail} {...item} posterUrl={item?.posterUrl} />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <SearchInput value={searchInput} onChange={handleSearch} />

            <View>
                <GenreList
                    genres={["None", ...genres]}
                    genreSelected={genreSelected}
                    onPressListItem={handleGenreSelected} />
            </View>

            {moviesFiltered?.length > 0 ? (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={styles.movieList}
                    data={moviesFiltered}
                    renderItem={MovieListRenderItem}
                    key={(_, i) => i.toString()}
                />
            ) : (
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../../assets/movies.png')} />
                </View>
            )}

        </SafeAreaView>
    )
}

export default React.memo(Search);
