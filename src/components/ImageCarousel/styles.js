import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    paggination: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 15,
    },
    pageLine: {
        width: 12,
        height: 12,
        backgroundColor: colors.transparent,
        marginHorizontal: 8,
        borderRadius: 10,
        borderColor: colors.white,
        borderWidth: 1
    },
    pageLineActive: {
        backgroundColor: colors.white,
        width: 24
    }
})