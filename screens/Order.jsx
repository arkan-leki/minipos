import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Iconmini from "react-native-heroicons/mini";
import { SafeAreaView } from 'react-native-safe-area-context';

const Order = () => {
    const navigation = useNavigation()

    React.useEffect(() => {
        navigation.setOptions({
            headerShown: false,
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
                <Text className="text-xl font-semibold text-lime-50 text-left p-2">All Orders</Text>
            </View>
            <View className="flex-1 w-full mt-14  bg-white">
                <Text className="px-4 text-gray-600 pt-2 text-xl font-normal">Total 1 receipe(s)</Text>
                <View className="flex flex-row items-center justify-between w-full p-2 gap-x-1">
                    <View className="flex flex-row justify-around items-center  p-3  border-2 rounded-md border-gray-300  bg-white w-1/2">
                        <View className="px-2"><Iconmini.UserIcon color={'teal'} size={20} /></View>
                        <Text>Kach le</Text>
                        <View className=" border-gray-400 px-2">
                            <Iconmini.ChevronDownIcon color={'teal'} size={20} />
                        </View>
                    </View>
                    <View className="flex flex-row justify-around items-center  p-3  border-2 rounded-md border-gray-300  bg-white w-1/2">
                        <View className="px-2"><Iconmini.CalendarIcon color={'teal'} size={20} /></View>
                        <Text>21/01/2023</Text>
                        <View className=" border-gray-400 px-2">
                            <Iconmini.ChevronDownIcon color={'teal'} size={20} />
                        </View>
                    </View>
                </View>
                <View className="flex-1 mb-2 w-full ">
                    <ScrollView className="overflow-scroll bg-gray-200 " alwaysBounceHorizontal={false}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((v) =>
                        (
                            <View className="flex flex-grow w-full px-2 my-1 bg-white border-b border-gray-300 shadow-sm s" key={v}>
                                <View className="flex flex-row justify-between items-start h-fit my-1">

                                    <View className="flex-1 flex-col h-full p-2">
                                        <Text className="font-bold text-base text-gray-600">Ban Chai Dang reng PS</Text>
                                        <Text className="font-medium text-base text-teal-600">0959275750923</Text>
                                        <Text className="font-medium text-base ">1/21/2023 8:44"35 PM</Text>
                                    </View>
                                    <View className="flex items-end justify-between p-2">
                                        <Text className="font-bold text-base text-gray-600">$260,000.00</Text>
                                        <Text className="font-light text-base text-right">Paied</Text>
                                        <Text className="font-bold text-base text-teal-600">$15,000.00</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>
                <View className="flex flex-row items-end justify-end gap-x-2 px-2 pb-1">
                    <Text className="font-normal text-base">Renuve</Text>
                    <Text className="font-bold text-base text-teal-500">$520,000.00</Text>
                </View>
            </View>
           <View className="w-full flex flex-row items-center bg-white justify-around border-t border-gray-200 py-2">
           <TouchableOpacity className=" shadow-md items-center "
                onPress={() => {
                    navigation.navigate("Order")
                }
                }>
                {/* <Image source={require('../images/shopping-bag.png')}
                    style={{
                        width: 30,
                        height: 30,
                        resizeMode: 'contain'
                    }}
                /> */}
                <Iconmini.ArrowUpTrayIcon color={'teal'} size={25} />
                <Text className="font-normal text-base text-center text-teal-700">Sell orders</Text>
            </TouchableOpacity>
            <TouchableOpacity className="shadow-md items-center"
                onPress={() => {
                    navigation.navigate("Order")
                }
                }>
                {/* <Image source={require('../images/shopping-bag.png')}
                    style={{
                        width: 30,
                        height: 30,
                        resizeMode: 'contain'
                    }}
                /> */}
                <Iconmini.ArrowDownTrayIcon color={'gray'} size={25} />
                <Text className="font-light text-base text-center">Paied</Text>
            </TouchableOpacity>
           </View>
        </SafeAreaView>
    )
}

export default Order