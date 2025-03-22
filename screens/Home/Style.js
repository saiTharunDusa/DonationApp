import { StyleSheet } from "react-native";
import { scaleFontSize, horizontalScale, verticalScale } from "../../assets/Scaling";

const Style = StyleSheet.create({
    textHello : {
        fontWeight: 400,
        fontSize: scaleFontSize(16),
        letterSpacing: 0.02,
        color: "#636776"
    },
    titleStyle : {
        fontWeight : 600,
        fontSize : scaleFontSize(16),
        letterSpacing: 0.02,
        color: "#022150"
    },
    headerContainer : {
        width : horizontalScale(327),
        height : verticalScale(53),
        marginHorizontal : horizontalScale(24),
        marginVertical : verticalScale(16),
        alignItems : 'center',
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    searchBox : {
        marginHorizontal : horizontalScale(22),

    },
    imageContainer : {
        marginHorizontal: horizontalScale(11),
        marginVertical : verticalScale(20),
        borderRadius : 30,
        width : horizontalScale(325),
        height : verticalScale(160)
    }
})

export default Style;