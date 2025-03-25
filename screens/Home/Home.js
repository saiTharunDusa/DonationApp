import {Alert, Image} from "react-native";
import { SafeAreaView, View, Text, ScrollView, Pressable } from "react-native";
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
import { resetToInitialState, updateFirstName } from "../../redux/reducers/user";
import { FlatList } from "react-native-gesture-handler";
import { updateSelectedCategory } from "../../redux/reducers/categories";
import { React, useEffect, useState } from "react";
import { updateSelectedDonationId } from "../../redux/reducers/donationItems";
import { Routes } from "../../navigation/Routes";
import auth from "@react-native-firebase/auth";
import { logOut } from "../../api/createUser";

const Home = ({navigation}) => {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const categories = useSelector((store) => store.categories);
    const donationItems = useSelector((store) => store.donationItems);


    const [currentPage, setCurrentPage] = useState(1);
    const [currentList, setCurrentList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const pageSize = 4;

    const [donationItemsList, setDonationItemsList] = useState([]);
    const [userName, setUserName] = useState('');


    useEffect(()=>{
        setUserName(auth().currentUser._user.displayName)
    }, [])

    useEffect(()=>{
        const items = donationItems.items.filter((value) => value.categoryIds.includes(categories.selectedCategoryId));
        setDonationItemsList(items);
    },[categories.selectedCategoryId])

    useEffect(()=>{
        setIsLoading(true);
        const newData = pagination(categories.categories, currentPage, pageSize);
        setCurrentList(newData);
        setCurrentPage(prev => prev + 1);
        setIsLoading(false);
    }, []);

    const pagination = (items, pageNumber, pageSize) => {
        const startIndex = (pageNumber - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        if(startIndex >= items.length)
        {
            return [];
        }
        return items.slice(startIndex, endIndex);
    }


    return(
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
         <ScrollView showsVerticalScrollIndicator={false}>
        {/**
            Title Component.
         */}
        <View style={Style.headerContainer}> 
            <View>
                <Text style={Style.textHello}>
                    Hello, 
                </Text>
                <View style={Style.titleStyle}>
                    <Header title = {user.displayName + '.👋'} type = {1} />
                </View>
            </View>
            <View style={{width : 50, height : 50, marginRight : 18}}>
                <Image source={require('../../assets/icon.png')}/>
                <Pressable
              onPress={async () => {
                dispatch(resetToInitialState());
                await logOut();
              }}>
              <Header type={3} title={'Logout'} color={'#156CF7'} />
            </Pressable>
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

        <Text style={{color : "#000000"}}>
            {categories.selectedCategory}
        </Text>

        {/**
         * All categories list.
         * 
         */}
        <View style={Style.headerCategory}>
            <Header title={'Select Category'} type={2}/>
        </View>
        <View style={Style.tabContainer}>
            <FlatList
                onEndReachedThreshold={0.5}
                onEndReached={()=>{
                    if(isLoading)
                    {
                        return;
                    }
                    setIsLoading(true);
                    let newData = pagination(categories.categories, currentPage, pageSize);
                    if(newData.length > 0)
                    {
                        setCurrentList(prev => [...prev, ...newData]);
                        setCurrentPage(prev => prev + 1);
                    }
                    setIsLoading(false);
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={currentList}
                renderItem={({item}) => (
                <View style={Style.tabItem}>
                    <Tab
                        tabId = {item.categoryId}
                        onPress={value=>dispatch(updateSelectedCategory(value))}
                        title={item.name}
                        isInactive={item.categoryId !== categories.selectedCategoryId}
                    />
                </View>
                )}  
            />
        </View>

        {
            /**
             *  Donation Items for selected categories
             */
        }
        {donationItemsList.length > 0 && (
        <View style={Style.donationItemsContainer}>
            {donationItemsList.map(value => {
              const categoryInformation = categories.categories.find(
                val => val.categoryId === categories.selectedCategoryId,
              );
              return (
                <View
                  key={value.donationItemId}
                  style={Style.singleDonationItem}>
                  <SingleDonationItem
                    onPress={selectedDonationId => {
                      dispatch(updateSelectedDonationId(selectedDonationId));
                      navigation.navigate(Routes.SingleDonationItem, {
                        categoryInformation,
                      });
                    }}
                    donationItemId={value.donationItemId}
                    uri={value.image}
                    donationTitle={value.name}
                    badgeTitle={categoryInformation.name}
                    price={parseFloat(value.price)}
                  />
                </View>
              );
            })}
        </View>
        )}

</ScrollView>
    </SafeAreaView>
    )
}

export default Home;