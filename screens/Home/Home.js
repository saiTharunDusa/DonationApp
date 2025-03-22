import {Alert, Image, React} from "react-native";
import { SafeAreaView, View, Text } from "react-native";
import globalStyle from "../../assets/styles/globalStyle";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Tab from "../../components/Tab/Tab";
import Badge from '../../components/Badge/Badge';
import Search from "../../components/Search/Search";
import SingleDonationItem from "../../components/SingleDonationItem/SingleDonationItem";
import { horizontalScale } from "../../assets/Scaling";
import Style from "./Style";
import { useSelector } from "react-redux";
import store from "../../redux/store";
import { useDispatch } from "react-redux";
import { updateFirstName } from "../../redux/reducers/user";


const Home = () => {
    const dispatch = useDispatch();
    dispatch(updateFirstName({firstName : "Sai Charan"}));
    const user = useSelector((store) => store.user);
    return(
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
        {/**
            Title Component.
         */}
        <View style={Style.headerContainer}> 
            <View>
                <Text style={Style.textHello}>
                    Hello, 
                </Text>
                <View style={Style.titleStyle}>
                    <Header title = {user.firstName + ' ' + user.lastName[0] + '.👋'} type = {1} />
                </View>
            </View>
            <View style={{width : 50, height : 50, marginRight : 18}}>
            <Image source={require('../../assets/icon.png')}/>
            </View>
        </View>

        {/**
            Search Box Component.
        */}
        <View style = {Style.searchBox}>
            <Search />
        </View>
        
        {/**
            Image for advertisement.
        */}
        <View>
            <Image source={require('../../assets/highlighted_image.png')} style={Style.imageContainer} />
        </View>
       
    </SafeAreaView>
    )
}

export default Home;