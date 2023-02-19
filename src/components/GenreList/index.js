import React from 'react'
import { FlatList } from 'react-native';
import GenreItem from '../GenreItem';
import { styles } from './styles';

const GenreList = ({ genres, genreSelected, onPressListItem }) => {

    const GenreRenderItem = ({ item, index }) => {
        return <GenreItem
            onPress={() => onPressListItem(item)}
            style={genreSelected === item ? styles.genreSelected : null}
            text={item} />;
    }

    return (
        <FlatList
            style={styles.genresList}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={genres}
            renderItem={GenreRenderItem}
            keyExtractor={(item, index) => index.toString()}
        />
    )
}

export default React.memo(GenreList);
