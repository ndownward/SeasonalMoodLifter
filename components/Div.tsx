import React from 'react';
import { View, Text } from 'react-native';
export default function Div(props: any)  {
    return (
        <View>
            <Text style={{backgroundColor:`${props.color}`}}>Hello, {props.name}</Text>
        </View>
    )
};