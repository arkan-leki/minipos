import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import * as Iconmini from "react-native-heroicons/mini";
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from './Navbar';

const Home = () => {
    const navigation = useNavigation()

    React.useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    })

    return (
        <SafeAreaView className="flex-1 items-center bg-gray-200">
            <View className="flex w-full p-3 bg-teal-600 h-20 absolute z-10 ">
                <Text className="text-2xl font-extrabold text-lime-50 p-3">Dana MiniMarket</Text>
            </View>
            <ScrollView className="flex-1 mt-16" alwaysBounceHorizontal={false}>
                <View className="flex flex-col w-full items-center justify-between py-3 bg-white">
                    <View className="flex flex-row items-center w-full px-3 pb-1">
                        <Text className="text-base font-semibold">Today</Text>
                        <View className="flex-1 flex-row items-center justify-end"><Iconmini.ChartBarIcon size={15} color='blue' />
                            <Text className="text-base font-semibold text-blue-600">Today</Text>
                            <Iconmini.ChevronRightIcon size={20} color='blue' />
                        </View>
                    </View>
                    <ScrollView horizontal={true} className="mx-4" alwaysBounceVertical={false} showsHorizontalScrollIndicator={false}>
                        <View className="flex-1 flex-grow flex-row items-center gap-1 w-full  overflow-scroll">
                            <View className="flex flex-row items-center justify-start pl-1 pr-4 gap-x-1 border-2 rounded-md border-gray-300 bg-orange-300 w-40 h-20">
                                <View className="rounded-full bg-orange-500 p-2">
                                    <Iconmini.ChartBarIcon size={20} color='white' />
                                </View>
                                <View className="flex flex-col gap-y-2 justify-start items-start">
                                    <Text className="text-gray-600">Revenue</Text>
                                    <Text className="text-base font-semibold text-black">$60,000.00</Text>
                                </View>
                            </View>
                            <View className="flex flex-row items-center justify-start pl-1 pr-4 gap-x-1 border-2 rounded-md border-gray-300 bg-blue-300 w-40 h-20">
                                <View className="rounded-full bg-blue-500 p-2">
                                    <Iconmini.DocumentCheckIcon size={20} color='white' />
                                </View>
                                <View className="flex flex-col gap-1 justify-between items-start">
                                    <Text className="text-gray-600">Orders</Text>
                                    <Text className="text-base font-semibold text-black">2</Text>
                                </View>
                            </View>
                            <View className="flex flex-row items-center justify-start pl-1 pr-4 gap-x-1 border-2 rounded-md border-gray-300 bg-teal-300 w-40 h-20">
                                <View className="rounded-full bg-teal-500 p-2">
                                    <Iconmini.CurrencyDollarIcon size={20} color='white' />
                                </View>
                                <View className="flex flex-col gap-1 justify-between items-start">
                                    <Text className="text-gray-600">Profit</Text>
                                    <Text className="text-base font-semibold text-black">$10,000.00</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View className="flex flex-row flex-wrap items-center justify-between gap-1 bg-transparent p-3 w-full shad">
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("Posterminal")
                    }
                    } className="flex items-center justify-between py-4 w-20 border-2 rounded-xl border-gray-300 bg-white h-fit">
                        <Image source={require('../images/cash-register2.png')}
                            style={{
                                width: 30,
                                height: 30,
                                resizeMode: 'contain'
                            }}
                        />
                        <Text className="text-xs font-light">Add Sell</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("ProductList")
                    }
                    } className="flex items-center justify-between py-4 w-20 border-2 rounded-xl border-gray-300 bg-white h-fit">
                        <Image source={require('../images/product.png')}
                            style={{
                                width: 30,
                                height: 30,
                                resizeMode: 'contain'
                            }}
                        />
                        <Text className="text-xs font-light">Products</Text>
                    </TouchableOpacity >
                    <TouchableOpacity className="flex items-center justify-between py-4 w-20 border-2 rounded-xl border-gray-300 bg-white h-fit"
                        onPress={() => {
                            navigation.navigate("Order")
                        }
                        }>
                        <Image source={require('../images/package.png')}
                            style={{
                                width: 30,
                                height: 30,
                                resizeMode: 'contain'
                            }}
                        />
                        <Text className="text-xs font-light">Orders</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("WareHouseCo")
                    }
                    } className="flex items-center justify-between py-4 w-20 border-2 rounded-xl border-gray-300 bg-white h-fit">
                        <Image source={require('../images/warehouse5.png')}
                            style={{
                                width: 30,
                                height: 30,
                                resizeMode: 'contain'
                            }}
                        />
                        <Text className="text-xs font-light">WareHouse</Text>
                    </TouchableOpacity>
                </View>
                <View className="bg-white">
                    <View className="flex flex-row items-center w-full p-3 pb-1">
                        <Text className="text-base font-semibold">Orders</Text>
                        <View className="flex-1 flex-row items-center justify-end">
                            <Text className="text-base font-semibold text-blue-600">View all</Text>
                            <Iconmini.ChevronRightIcon size={20} color='blue' />
                        </View>
                    </View>
                    <View className="flex flex-row items-center justify-evenly p-5 ">
                        <View className="flex flex-col items-center justify-between border-r-2 border-gray-300  pr-10">
                            <View className="flex flex-row py-4 justify-between  items-center gap-1">
                                <Image source={require('../images/outbox.png')}
                                    style={{
                                        width: 30,
                                        height: 30,
                                        resizeMode: 'contain'
                                    }}
                                />
                                <Text className="font-light text-base">Sell orders</Text>
                            </View>
                            <Text>2</Text>
                        </View>
                        <View className="flex flex-col items-center justify-between border-r-0 border-gray-300 ">
                            <View className="flex flex-row py-4 justify-between items-center gap-1">
                                <Image source={require('../images/inbox.png')}
                                    style={{
                                        width: 30,
                                        height: 30,
                                        resizeMode: 'contain'
                                    }}
                                />
                                <Text className="font-light text-base">Stock-in orders</Text>
                            </View>
                            <Text>0</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity className="bg-teal-600 rounded-full absolute z-20  bottom-16 right-3 p-3 shadow-md border-2 border-white"
                onPress={() => {
                    navigation.navigate("Posterminal")
                }
                }>
                {/* <Image source={require('../images/shopping-bag.png')}
                    style={{
                        width: 30,
                        height: 30,
                        resizeMode: 'contain'
                    }}
                /> */}
                <Iconmini.ShoppingBagIcon color={'white'} size={30} />

            </TouchableOpacity>
            <Navbar selc={'Home'} />
        </SafeAreaView>
    )
}

export default Home