import React from "react";
import Style from './Style';
import {useSelector} from 'react-redux';
import globalStyle from "../../assets/styles/globalStyle";
import { SafeAreaView, ScrollView, Image, View, Text } from "react-native";
import BackButton from "../../components/BackButton/BackButton";
import Badge from "../../components/Badge/Badge";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";


const SingleDonationItem = ({navigation, route}) => {
    const donationItemInformation = useSelector(
        state => state.donationItems.selectedDonationInformation,
      );
      const categoryInformation = route.params.categoryInformation;

      return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
          <ScrollView showsVerticalScrollIndicator={false} style={Style.container}>
            <BackButton onPress={() => navigation.goBack()} />
            <Image
          source={{uri: donationItemInformation.image}}
          style={Style.image}
        />
        <View style={Style.badge}>
          <Badge title={categoryInformation.name} />
        </View>
        <Header type={1} title={donationItemInformation.name} />
        <Text style={Style.description}>
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
        </Text>
          </ScrollView>
          <View style={Style.button}>
        <Button title={'Donate'} />
      </View>
        </SafeAreaView>
      );
}

export default SingleDonationItem;