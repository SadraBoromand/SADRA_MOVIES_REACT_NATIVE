import colors from "../../utils/colors";

const { StyleSheet } = require("react-native")

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        padding: 24,
        paddingTop: 32,
        flex: 1,
        // borderWidth: 1,
        // borderColor: colors.white
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    contact: {
        flex: 1,
        alignItems: "flex-end",
        marginRight: 24,
    },
    name: {
        color: colors.white,
        fontSize: 18,
        marginBottom: 8,
        fontFamily: 'Vazir'
    },
    email: {
        color: colors.white,
        fontSize: 18,
        fontFamily: 'Vazir'

    },
    imageProfile: {
        width: 120,
        height: 120,
        backgroundColor: colors.boxGray,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 80,
        height: 80,
    },
    line: {
        backgroundColor: colors.boxGray,
        width: "100%",
        height: 1,
        alignSelf: "center",
        marginVertical: 24
    },
    button: {
        position: "absolute",
        bottom: 32,
        alignSelf: "center"
    }
});