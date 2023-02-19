import colors from "../../utils/colors";

const { StyleSheet } = require("react-native")

export const styles = StyleSheet.create({
    genresList: {
        marginHorizontal: 12,
    },
    genreText: {
        color: colors.white,
        alignSelf: 'center',
        marginHorizontal: 10,
        fontSize: 18,
        fontFamily: 'Vazir'
    },
    genreSelected: {
        borderWidth: 1,
        borderColor: '#fff',
    },
});