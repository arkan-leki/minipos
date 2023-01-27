import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import * as Iconmini from "react-native-heroicons/mini";
import { SwipeListView } from 'react-native-swipe-list-view';

const ListItem = ({data}) => {
    return (
        <SwipeListView
            data={data}
            renderItem={({ item }) =>
            (
                <View className="flex-1 flex-row justify-between items-center h-16 border border-gray-200 p-2 rounded bg-white ">
                    <Text className="font-normal text-base ">Ban Chai Dang reng PS</Text>
                </View>
            )}
            renderHiddenItem={() => (
                <View className="flex-1 flex-row justify-end items-center gap-x-1 bg-transparent border-2 border-gray-200 ">
                    <TouchableOpacity className="bg-green-500 h-full w-12 items-center justify-center  rounde ">
                        <Iconmini.PencilSquareIcon color={'white'} size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-red-500 h-full w-12 items-center justify-center rounded ">
                        <Iconmini.TrashIcon color={'white'} size={30} />
                    </TouchableOpacity>
                </View>
            )}
            // leftOpenValue={75}
            rightOpenValue={-105}
        />
    );
}

export default ListItem