import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native';
import * as Iconmini from "react-native-heroicons/mini";
import { SafeAreaView } from 'react-native-safe-area-context';
import WareHouseComponent from './WareHouseComponent';

const WareHouseCo = () => {
    const navigation = useNavigation()

    React.useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    })

    return (
        <SafeAreaView className="flex-1 items-center bg-gray-200">

            <View className="flex flex-row w-full py-2 pt-6 bg-gray-700 absolute z-10 gap-2 items-center justify-start px-3">
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Home")
                }
                }>
                    <Iconmini.ArrowLeftIcon color={'white'} size={30} />
                </TouchableOpacity>
                <Text className="text-xl font-semibold text-lime-50 text-left p-2">WareHouse</Text>
            </View>

            <View className="flex-1 w-full mt-12  bg-transparent">
                <View className="flex w-full p-3 bg-teal-600 h-fit top-0">
                    <Text className="text-2xl font-extrabold text-lime-50 p-2 ">Dana MiniMarket</Text>
                </View>
                <WareHouseComponent />
            </View>

        </SafeAreaView>
    )
}

export default WareHouseCo