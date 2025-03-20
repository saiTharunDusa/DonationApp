import React from "react";
import { View, Text } from "react-native";
import Style from "./Style";
import PropTypes from "prop-types";

const Header = (props) => {
    const styleToApply = () => {
        switch(props.type)
        {
            case 1:
                return Style.title1;
            case 2: 
                return Style.title2;
            case 3:
                return Style.title3;
            default:
                return 1;
        }
    }
    return(
        <View>
            <Text style={styleToApply()}>{props.title}</Text>
        </View>
    )
}

Header.defaultProps = {
    title : '',
    type : 1,
}

Header.propTypes = {
    title : PropTypes.string,
    type : PropTypes.number,
}

export default Header;