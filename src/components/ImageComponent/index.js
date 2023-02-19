import React, { useState } from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';

const ImageComponent = ({ id, url, style, prop, onPress }) => {
    const [defaultImage, setDefaultImage] = useState(false);

    return (
        <>
            {id ? (
                <Pressable onPress={() => onPress(id)}>
                    <Image
                        {...prop}
                        style={[style]}
                        onError={(error) => {
                            setDefaultImage(true);
                        }}
                        source={defaultImage ?
                            require('../../assets/defaultImage.png') :
                            { uri: url }}
                    />
                </Pressable >
            ) : (
                <Image
                    // {...prop}
                    style={[style]}
                    // onError={(error) => {
                    //     setDefaultImage(true);
                    // }}
                    source={{ uri: url }}
                />
            )}
        </>
    )
}

export default React.memo(ImageComponent);
