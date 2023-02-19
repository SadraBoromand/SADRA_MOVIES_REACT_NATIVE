import React from 'react'
import { ScrollView, Image, View, Text, SafeAreaView, TouchableOpacity, Pressable } from "react-native";
import { styles } from './styles';

import movies from '../../data/movies.json';
import ImageComponent from '../../components/ImageComponent';

const Detail = ({ navigation, route }) => {

    const movieId = route?.params?.id;
    const { title, year,
        runtime, genres,
        director, actors,
        plot, posterUrl } = movies.find(movie => movie.id === movieId);

    const handleBack = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity activeOpacity={0.8} onPress={handleBack} style={styles.backContainer}>
                    <Image style={styles.back} source={require('../../assets/back.png')} />
                </TouchableOpacity>

                <View style={styles.contact}>
                    <ImageComponent
                        url={posterUrl}
                        prop={
                            resizeMode = 'stretch'
                        }
                        style={styles.image} />
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.year}>{year}</Text>
                    <Text style={styles.text}>مدت فیلم: {runtime} دقیقه</Text>
                    <Text style={styles.text}>ژانر فیلم:</Text>
                    <ScrollView horizontal style={styles.genresContainer}>
                        {genres.map((genre, index) =>
                            <Text
                                style={styles.genre}
                                key={index}>
                                {genre}
                            </Text>)}
                    </ScrollView>
                </View>

                <View style={styles.line} />

                <Text style={styles.text}>کارگردان: {director}</Text>
                <Text style={styles.text}>داستان فیلم:</Text>
                <Text style={styles.description}>{plot}</Text>

                <Text style={styles.text}>بازیگران:</Text>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    style={styles.actorsContainer}>
                    {actors.split(',').map((actor, index) =>
                        <Text
                            style={styles.actor}
                            key={index}>
                            {actor}
                        </Text>)
                    }
                </ScrollView>

            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(Detail);
