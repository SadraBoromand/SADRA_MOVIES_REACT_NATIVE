import colors from "../../utils/colors";

const { StyleSheet } = require("react-native")

export const styles = StyleSheet.create({
    container: {
        padding: 12,
        minWidth: 65,
        backgroundColor: colors.boxGray,
        height: 50,
        marginHorizontal: 8,
        marginVertical: 15,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: colors.white,
        fontWeight: "500"
    }
});