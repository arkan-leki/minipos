import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import * as Iconmini from "react-native-heroicons/mini";
import { SwipeListView } from 'react-native-swipe-list-view';

const ProductItem = ({ data }) => {
    return (
        <SwipeListView
            data={data}
            renderItem={({ item }) =>
            (
                <View className="flex flex-row justify-between items-start h-20  bg-white border-b border-gray-300">
                    <View className="py-0 justify-center h-full">
                        <Image source={require('../images/image.png')}
                            style={{
                                width: 60,
                                height: 60,
                                padding: 4,
                                resizeMode: 'stretch'
                            }}
                        />
                    </View>
                    <View className="flex-1 flex-col justify-center h-full p-2">
                        <Text className="font-semibold text-base ">Ban Chai Dang reng PS</Text>
                        <Text className="font-sm text-sm ">0959275750923 - Cai</Text>
                    </View>
                    <View className="flex items-start justify-center h-full p-1 flex-col">
                        <Text className="font-light text-xs ">Cost</Text>
                        <Text className="font-bold text-sm text-teal-600">$15,000.00</Text>
                        <Text className="font-light text-xs ">Price</Text>
                        <Text className="font-bold text-sm text-red-600">$15,000.00</Text>
                    </View>
                </View>
            )}
            renderHiddenItem={() => (
                <View className="flex-1 flex-row justify-end items-center gap-x-1 border-2 border-gray-100 bg-transparent">
                    <TouchableOpacity className="bg-green-500 h-full w-12 items-center justify-center  rounded">
                        <Iconmini.PencilSquareIcon color={'white'} size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-red-500 h-full w-12 items-center justify-center rounded">
                        <Iconmini.TrashIcon color={'white'} size={30} />
                    </TouchableOpacity>
                </View>
            )}
            // leftOpenValue={75}
            rightOpenValue={-110}
        />
    );
}

export default ProductItem