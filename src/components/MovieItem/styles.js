import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        marginHorizontal: 24,
        marginVertical: 8,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: colors.boxGray,
        direction: 'rtl'
    },
    image: {
        width: 120,
        height: 190,
        backgroundColor: colors.boxGray,
        borderRadius: 10,
    },
    contact: {
        flex: 1,
        alignItems: "flex-end",
        marginVertical: 12,
        marginHorizontal: 24,
    },
    title: {
        color: colors.white,
        fontSize: 18,
        fontWeight: "500"
    },
    year: {
        color: colors.white,
        fontSize: 18,
    },
    genresContainer: {
        flexDirection: "row",
        marginVertical: 10
    },
    genre: {
        color: colors.red,
        marginLeft: 8,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: colors.red,
        padding: 8
    },
    button: {
        position: "absolute",
        width: 120,
        bottom: 18,
        left: 10
    }
})