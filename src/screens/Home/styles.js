import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    genresList: {

    },
    logo: {
        width: "50%",
        height: 80,
        alignSelf: 'center'
    },
    genreContainer: {
        flexDirection: 'row',
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

export default styles;