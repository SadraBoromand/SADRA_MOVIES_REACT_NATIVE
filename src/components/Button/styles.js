import colors from "../../utils/colors";

const { StyleSheet, Dimensions } = require("react-native")

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: colors.transparent,
        borderWidth: 1,
        borderColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
    },
    text: {
        color: colors.white,
        fontFamily: 'Vazir'
    }
});