import { StyleSheet } from "react-native";
import { verticalScale } from "../Scaling";

const globalStyle = StyleSheet.create({
    backgroundWhite : {
        backgroundColor : "#FFFFFF"
    },
    flex : {
        flex : 1,
    },
    marginBottom24: {
        marginBottom: verticalScale(24),
    },
})

export default globalStyle;