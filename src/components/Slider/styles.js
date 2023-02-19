import colors from "../../utils/colors";

const { StyleSheet, Dimensions } = require("react-native")

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: colors.transparent,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
    },
    text: {
        width: "100%",
        color: colors.white,
        marginBottom: 10,
        textAlign: "right",
        fontSize: 18,
        marginRight: 20,
        fontFamily: 'Vazir'
    },
    image: {
        width: 120,
        height: 190,
        marginHorizontal: 12,
        backgroundColor: colors.boxGray,
        borderRadius: 8,
    }
});