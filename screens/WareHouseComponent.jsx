import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { ScrollView, Text, TextInput, View } from 'react-native';
import * as Iconmini from "react-native-heroicons/mini";
import WareHouseItem from './WareHouseItem';

const data = [
    { key: '1', text: 'Item 1' },
    { key: '2', text: 'Item 2' },
    { key: '3', text: 'Item 3' },
    { key: '4', text: 'Item 4' },
];

const WareHouseComponent = () => {
    const navigation = useNavigation()

    React.useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    })
    return (
        <><View className="flex-1">
            <View className="flex flex-col w-full items-center justify-between py-3 bg-white">
                <View className="flex flex-row items-center w-full px-3 pb-1">
                    <Text className="text-base font-semibold">Today</Text>
                    <View className="flex-1 flex-row items-center justify-end"><Iconmini.ChartBarIcon size={15} color='blue' />
                        <Text className="text-base font-semibold text-blue-600 mx-1">Stock Reports</Text>
                        <Iconmini.ChevronRightIcon size={20} color='blue' />
                    </View>
                </View>
                <View className="my-2 mx-4 h-16">
                    <View className="flex-1 flex-grow flex-row items-center gap-1 w-full h-fit">
                        <View className="flex flex-row items-center justify-between pl-1 pr-4 gap-x-1 border-2 rounded-md border-gray-300 bg-gray-100 w-1/2 h-20">
                            {/* <View className="rounded-full bg-gray-400 p-2">
        <Iconmini.ChartBarIcon size={20} color='red' />
    </View> */}
                            <View className="flex flex-col gap-y-1 justify-between items-start">
                                <Text className="text-gray-800 text-xl">Stock value</Text>
                                <Text className="text-base font-semibold text-black">$615,000.00</Text>
                            </View>
                        </View>
                        <View className="flex flex-row items-center justify-between pl-1 pr-4 gap-x-1 border-2 rounded-md border-gray-300 bg-gray-100 w-1/2 h-20">
                            {/* <View className="rounded-full bg-blue-400 p-2">
        <Iconmini.DocumentCheckIcon size={20} color='blue' />
    </View> */}
                            <View className="flex flex-col gap-y-1 justify-between items-start">
                                <Text className="text-gray-800 text-xl">item(s)</Text>
                                <Text className="text-base font-semibold text-black">6</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View className="border-b-2 border-gray-300">
                <View className="flex flex-row justify-center items-center gap-x-1 mx-4 my-2 border-2 rounded-xl border-gray-300  bg-white">
                    <View className="px-2"><Iconmini.MagnifyingGlassIcon color={'gray'} size={20} /></View>
                    <TextInput
                        placeholder="Enter product name/code"
                        style={{
                            flex: 1,
                            margin: 3,
                            padding: 3,
                            backgroundColor: 'white',
                        }} />
                    <View className="border-l  border-gray-400 px-2"><Iconmini.QrCodeIcon color={'gray'} size={20} /></View>
                </View>
            </View>
            <View className="flex-1 bg-white mt-3 p-2 ">
                <View className="flex flex-row justify-between items-center gap-x-1">
                    <View className="items-center flex-1 flex-row gap-2"><Text className="text-xl text-gray-500">Name</Text><Iconmini.ArrowsUpDownIcon color={'gray'} /></View>
                    <View className="items-center flex flex-row gap-2"><Text className="text-xl text-gray-500">Q.ty</Text><Iconmini.ArrowsUpDownIcon color={'gray'} /></View>
                    <View className="items-center flex flex-row gap-2"><Text className="text-xl text-gray-500">value</Text><Iconmini.ArrowsUpDownIcon color={'gray'} /></View>
                </View>
                <ScrollView className="overflow-scroll mb-2" alwaysBounceHorizontal={false}>
                    {data.map((item) => (
                        <WareHouseItem key={item.key} data={item.text} />
                    ))}
                </ScrollView>
            </View>
        </View>
            <View className="flex flex-row justify-around w-full items-center bg-transparent m-2  bottom-0 z-20">
                <View className="flex flex-row bg-red-500 p-2 rounded-md w-1/3 items-center justify-center"><Iconmini.ArrowDownIcon color={'white'} /><Text className="text-white text-base">Adjust-Stock</Text></View>
                <View className="flex flex-row bg-teal-500 p-2 rounded-md w-1/3 items-center justify-center"><Iconmini.ArrowUpIcon color={'white'} /><Text className="text-white text-base">Stock-In</Text></View>

            </View>
        </>
    )
}

export default WareHouseComponent