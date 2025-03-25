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
        marginHorizontal: horizontalScale(20),
        marginVertical : verticalScale(20),
        borderRadius : 30,
        width : horizontalScale(310),
        height : verticalScale(160)
    },
    tabContainer : {
        marginLeft : horizontalScale(20),
        marginTop : verticalScale(10),
    },
    tabItem : {
        marginRight : horizontalScale(10)
    },
    headerCategory : {
        marginHorizontal : horizontalScale(24),
    },
    donationItemsContainer: {
        marginTop: verticalScale(20),
        marginHorizontal: horizontalScale(24),
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      },
      singleDonationItem : {
        maxWidth: '49%',
        marginBottom: verticalScale(23),
      }
})

export default Style;