import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Image, ScrollView, Text, TextInput, View } from 'react-native';
import * as Iconmini from "react-native-heroicons/mini";
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from './Navbar';
import WareHouseComponent from './WareHouseComponent';

const WareHouse = () => {
    const navigation = useNavigation()

    React.useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    })

    return (
        <SafeAreaView className="flex-1 flex=col items-center bg-gray-200">
            <View className="flex w-full p-3 bg-teal-600 h-fit absolute z-20 top-0">
                <Text className="text-2xl font-extrabold text-lime-50 p-3">Dana MiniMarket</Text>
            </View>
            <View className="w-full flex-1 my-14">
                <WareHouseComponent />
            </View>
            <View className="w-full absolute z-20 bottom-0 h-14">
                <Navbar selc={'WareHouse'} />
            </View>
        </SafeAreaView>
    )
}

export default WareHouse