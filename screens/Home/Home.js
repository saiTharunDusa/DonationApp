import {React} from "react-native";
import { SafeAreaView, View, Text } from "react-native";
import globalStyle from "../../assets/styles/globalStyle";
import Header from "../../components/Header/Header";

const Home = () => {
    return(
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <Header title = {'Tharun'} type = {1} />
        </SafeAreaView>
    )
}

export default Home;