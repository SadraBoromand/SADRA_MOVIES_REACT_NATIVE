import colors from "../../utils/colors";

const { StyleSheet } = require("react-native")

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 8,
        margin: 24,
        alignItems: 'center',
        paddingHorizontal: 12
    },
    image: {
        width: 24,
        height: 24,
    },
    input: {
        color: colors.white,
        fontFamily: 'Vazir',
        fontSize: 14,
        marginHorizontal: 10,
        alignSelf: "center",
        flex: 1,
        paddingVertical: 10,
        textAlign: "right",
    }
});