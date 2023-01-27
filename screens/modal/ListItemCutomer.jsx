import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import * as Iconmini from "react-native-heroicons/mini";
import { SwipeListView } from 'react-native-swipe-list-view';

const ListItemCutomer = ({ data }) => {
    return (
        <SwipeListView
            data={data}
            renderItem={({ item }) =>
            (
                <View className="flex-1 flex-row justify-start gap-x-4 items-center h-20  border-b border-gray-100 p-2 rounded-md bg-white ">
                    <View className="flex items-center p-2 border rounded-md bg-gray-200 border-gray-300">
                        <View className="border p-1 rounded-full bg-gray-100 border-gray-400">
                            <Text className="text-center text-xl text-black">{'Khalid Ali'.toUpperCase().slice(0, 2)}</Text>
                        </View>
                    </View>
                    <View className="flex gap-2">
                        <Text className="font-normal text-clip">Khalid Ali</Text>
                        <Text className="font-normal text-clip text-teal-500">07706954444</Text>
                    </View>
                </View>
            )}
            renderHiddenItem={() => (
                <View className="flex-1 flex-row justify-end items-center gap-x-1 bg-transparent border-2 border-gray-100">
                    <TouchableOpacity className="bg-green-500 h-full w-12 items-center justify-center p-1 rounded">
                        <Iconmini.PencilSquareIcon color={'white'} size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-red-500 h-full w-12 items-center justify-center p-1 rounded">
                        <Iconmini.TrashIcon color={'white'} size={30} />
                    </TouchableOpacity>
                </View>
            )}
            // leftOpenValue={75}
            rightOpenValue={-110}
        />
    );
}

export default ListItemCutomer