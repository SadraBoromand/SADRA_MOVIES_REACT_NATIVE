import { StyleSheet, Dimensions } from "react-native";
import colors from "../../utils/colors";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: colors.black,
        paddingVertical: 12
    },
    backContainer: {
        width: 60,
        height: 60,
        backgroundColor: colors.black,
        borderWidth: 3,
        borderColor: colors.boxGray,
        borderRadius: 22,
        justifyContent: "center",
        alignItems: "center",
    },
    back: {
        width: 28,
        height: 28,
    },
    contact: {
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: width / 2,
        height: height / 3,
        backgroundColor: colors.boxGray,
        borderRadius: 10,
        marginTop: -24,
    },
    title: {
        color: colors.white,
        fontFamily: 'Vazir',
        fontSize: 24,
        marginVertical: 10,
    },
    year: {
        color: colors.white,
        fontFamily: 'Vazir',
        fontSize: 20,
        marginBottom: 10,
    },
    text: {
        color: colors.white,
        fontFamily: 'Vazir',
        fontSize: 18,
        marginBottom: 8,
    },
    description: {
        color: colors.white,
        fontFamily: 'Vazir',
        textAlign: "justify",
        fontSize: 15,
    },
    genresContainer: {
        flexDirection: 'row',
        margin: 10
    },
    genre: {
        color: colors.white,
        fontFamily: 'Vazir',
        color: colors.red,
        borderWidth: 1,
        borderColor: colors.red,
        padding: 8,
        margin: 5,
        borderRadius: 8
    },
    line: {
        width: '100%',
        backgroundColor: colors.boxGray,
        height: 1,
        marginVertical: 10
    },
    actorsContainer: {
        flexDirection: 'row',
        margin: 10,
        direction: "rtl",
        marginBottom: 20
    },
    actor: {
        color: colors.white,
        fontFamily: 'Vazir',
        color: colors.red,
        borderWidth: 1,
        borderColor: colors.red,
        padding: 8,
        margin: 5,
        borderRadius: 8
    },
})