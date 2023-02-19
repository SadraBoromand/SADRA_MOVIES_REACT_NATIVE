import React, { useState } from 'react';
import { FlatList, View, Dimensions } from 'react-native';
import CarouselItem from '../CarouselItem';
import { styles } from './styles';

const { width } = Dimensions.get('window');

const ImageCarousel = ({ movies, onPress }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const CarouselRenderItem = ({ item }) => {
        return <CarouselItem onPress={onPress} {...item} />
    }

    const handleScrollEnd = (e) => {
        const horizontalOffset = e.nativeEvent.contentOffset.x;
        const index = Math.round(horizontalOffset / width);
        setActiveIndex(index);
    }

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={movies}
                pagingEnabled
                renderItem={CarouselRenderItem}
                keyExtractor={(_, i) => i.toString()}
                onMomentumScrollEnd={handleScrollEnd}
            />

            <View style={styles.paggination}>
                {movies.map((_, i) => (
                    <View
                        key={i}
                        style={[styles.pageLine, activeIndex === i && styles.pageLineActive]} />
                ))}
            </View>
        </View>
    )
}

export default React.memo(ImageCarousel);
