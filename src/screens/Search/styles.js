import colors from "../../utils/colors";

const { StyleSheet, Dimensions } = require("react-native")

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    imageContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    },
    image: {
        width: width / 3,
        height: width / 3,
    },
    movieList:{
        width:"100%"
    }
});