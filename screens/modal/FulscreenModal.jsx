import React, { useState } from 'react';
import { Modal, TouchableOpacity, Text, TouchableHighlight, View, TextInput, Button } from 'react-native';
import * as Iconmini from "react-native-heroicons/mini";
import { SwipeListView } from 'react-native-swipe-list-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import ListItem from './ListItem';

const data = [
    { key: '1', text: 'Item 1' },
    { key: '2', text: 'Item 2' },
    { key: '3', text: 'Item 3' },
    { key: '4', text: 'Item 4' },
];

function FulscreenModal({closeModal, title }) {
    const [search, setSearch] = useState(false)
    const navigation = useNavigation()

    React.useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    })

    return (
        <SafeAreaView className="flex-1 items-center bg-gray-200">
            <View className="flex flex-row w-full bg-gray-700 absolute z-10 gap-2 p-2  items-center justify-start top-0">
                <TouchableHighlight onPress={() => {
                    closeModal();
                }}>
                    <Iconmini.ArrowLeftIcon color={'white'} size={30} />
                </TouchableHighlight>
                <Text className="text-xl font-semibold text-lime-50 text-left p-2">{title}</Text>
            </View>
            <View className="flex-1 mt-16 ">
                <View className="flex flex-row justify-between items-center gap-2 w-full mb-1 p-1">
                    <TouchableOpacity className="items-center flex-1 flex-row " onPress={() => setSearch(!search)}>
                        <Iconmini.MagnifyingGlassIcon size={20} color={'teal'} />
                        <Text className="text-xs text-gray-800 font-semibold mx-2">Search</Text>
                    </TouchableOpacity>
                    <Text className="flex text-xs text-gray-800 px-2 font-semibold">Swap to edit</Text>
                </View>
                {search && (<View className="flex flex-row items-center justify-start w-full " >
                    <View className="flex-1 flex-row justify-center items-center gap-x-1 m-4 my-2 border-2 rounded-xl border-gray-300  bg-white">
                        <View className="px-2"><Iconmini.MagnifyingGlassIcon color={'gray'} size={20} /></View>
                        <TextInput
                            placeholder="Enter name/code"
                            style={{
                                flex: 1,
                                margin: 3,
                                padding: 3,
                                backgroundColor: 'white',
                            }}
                        />
                    </View>
                </View>)}
                <View className="flex-1  h-full justify-center ">
                    <ListItem data={data} />
                </View>
            </View>

        </SafeAreaView>
    );
}

export default FulscreenModal