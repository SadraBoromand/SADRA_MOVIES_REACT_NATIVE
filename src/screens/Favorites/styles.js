import colors from "../../utils/colors";

const { StyleSheet } = require("react-native")

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        paddingHorizontal: 8,
        flex: 1,

    },
    title: {
        color: colors.white,
        fontSize: 18,
        fontFamily: "Vazir",
        textAlign: "center",
        marginTop:12
    },
    line: {
        backgroundColor: colors.boxGray,
        width: "100%",
        height: 1,
        alignSelf: "center",
        marginVertical: 12
    },
    movieList: {
        flex: 1,
    }
});