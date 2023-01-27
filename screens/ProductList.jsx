import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Iconmini from "react-native-heroicons/mini";
import { SafeAreaView } from 'react-native-safe-area-context';
import { SwipeListView } from 'react-native-swipe-list-view';
import ProductItem from './ProductItem';
import UnitModal from './UnitModal';

const data = [
    { key: '1', text: 'Item 1' },
    { key: '2', text: 'Item 2' },
    { key: '3', text: 'Item 3' },
    { key: '4', text: 'Item 4' },
];


const ProductList = () => {
    const navigation = useNavigation()

    React.useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    })

    const [unitmodalVisible, setUnitModalVisible] = useState(false);
    const [catmodalVisible, setCatModalVisible] = useState(false);
    const openUnitModal = () => {
        setUnitModalVisible(true)
    };

    const closeUnitModal = () => {
        setUnitModalVisible(false);
    };

    const openCatModal = () => {
        setCatModalVisible(true)
    };

    const closeCatModal = () => {
        setCatModalVisible(false);
    };

    return (
        <SafeAreaView className="flex-1 items-center bg-gray-200">
            <View className="flex flex-row w-full py-2 pt-6 bg-gray-700 absolute z-10 gap-2 items-center justify-start px-3">
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Home")
                }
                }>
                    <Iconmini.ArrowLeftIcon color={'white'} size={30} />
                </TouchableOpacity>
                <Text className="text-xl font-semibold text-lime-50 text-left p-2">Products</Text>
            </View>
            <View className="flex-1 w-full mt-14  bg-transparent">
                <Text className="px-4 text-gray-600 font-medium">Search of Scan</Text>
                <View className="flex flex-row items-center justify-start w-full">
                    <View className="flex-1 flex-row justify-center items-center gap-x-1 m-4 my-2 border-2 rounded-xl border-gray-300  bg-white">
                        <View className="px-2"><Iconmini.MagnifyingGlassIcon color={'gray'} size={20} /></View>
                        <TextInput
                            placeholder="Enter product name/code"
                            style={{
                                flex: 1,
                                margin: 3,
                                padding: 3,
                                backgroundColor: 'white',
                            }}
                        />
                        <View className="border-l  border-gray-400 px-2"><Iconmini.QrCodeIcon color={'gray'} size={20} /></View>
                    </View>
                    <View className="mr-4 p-1 bg-white rounded-xl border border-gray-300 px-4 "><Iconmini.SquaresPlusIcon size={30} color={'teal'} /></View>
                </View>

                <View className="flex flex-row items-center justify-between bg-white px-2 h-12 w-full ">
                    <TouchableOpacity onPress={openCatModal} className="flex flex-col justify-start border-r border-gray-300 h-fit w-1/2">
                        <Text className="font-semibold text-xs">CATEGORY</Text>
                        <View className="flex items-center flex-row "><Text className="text-xs flex-1">All Category</Text>
                            <Iconmini.ChevronDownIcon color={'teal'} /></View>
                        <UnitModal modalVisible={catmodalVisible} closeModal={closeCatModal} title={'Categories'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={openUnitModal} className="flex flex-col justify-start p-1 h-fit w-1/2">
                        <Text className="font-semibold text-xs">UNIT</Text>
                        <View className="flex items-center flex-row"><Text className="text-xs flex-1">All Unit</Text>
                            <Iconmini.ChevronDownIcon color={'teal'} /></View>
                        <UnitModal modalVisible={unitmodalVisible} closeModal={closeUnitModal}/>
                    </TouchableOpacity>
                </View>
                <View className="flex-1 mt-3 mb-2">
                    <View className="flex flex-row justify-between items-center gap-x-1 w-full">
                        <View className="items-center flex-1 flex-row gap-2"><Text className="text-xl text-gray-800">Name</Text>
                            <Iconmini.ArrowsUpDownIcon size={20} color={'black'} />
                        </View>
                        <Text className="flex text-gray-600 right-1">Swap to edit and delete</Text>
                    </View>
                    <View className="overflow-scroll px-2 bg-white">
                        <ProductItem data={data} />
                    </View>
                </View>

            </View>
            <TouchableOpacity className="bg-teal-600 rounded-full absolute z-20  bottom-5 right-3 p-3 shadow-md border-2 border-white"
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
                <Iconmini.PlusIcon color={'white'} size={30} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default ProductList