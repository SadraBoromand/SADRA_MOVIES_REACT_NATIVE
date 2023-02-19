import colors from "../../utils/colors";

const { StyleSheet, Dimensions } = require("react-native")

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        width: width,
        height: 230,
        justifyContent: 'center',
        padding: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        maxWidth: '100%',
        color: colors.white,
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 8
    },
    subtitle: {
        color: colors.white,
        fontSize: 14,
    },
    image: {
        width: (width / 2) - 40,
        height: 230,
        backgroundColor: colors.boxGray,
        borderRadius: 10,
    },
    contact: {
        backgroundColor: colors.boxGray,
        height: 200,
        paddingHorizontal: 12,
        paddingVertical: 20,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        marginRight: 8
    },
    genreContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 10,
        width: '100%'
    },
    genre: {
        borderWidth: 0.5,
        borderColor: colors.red,
        padding: 5,
        marginRight: 4,
        borderRadius: 4,
        color: colors.red,
        fontSize: 12
    },
    button: {
        position: 'absolute',
        bottom: 15,
        alignSelf: 'center'
    },
    
});