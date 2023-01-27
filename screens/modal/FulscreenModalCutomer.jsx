import React, { useState } from 'react';
import { Modal, TouchableOpacity, Text, TouchableHighlight, View, TextInput, Button } from 'react-native';
import * as Iconmini from "react-native-heroicons/mini";
import { SwipeListView } from 'react-native-swipe-list-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import ListItem from './ListItem';
import ListItemCutomer from './ListItemCutomer';

const data = [
    { key: '1', text: 'Item 1' },
    { key: '2', text: 'Item 2' },
    { key: '3', text: 'Item 3' },
    { key: '4', text: 'Item 4' },
];

function FulscreenModalCutomer({ closeModal, title }) {
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
                <View className="flex flex-row items-center justify-start w-full ">
                    <View className="flex-1 flex-row justify-center items-center gap-x-1 mx-2 my-1 border-2 rounded-xl border-gray-300  bg-white">
                        <View className="px-2"><Iconmini.MagnifyingGlassIcon color={'gray'} size={20} /></View>
                        <TextInput
                            placeholder="Enter customer name/code"
                            style={{
                                flex: 1,
                                margin: 2,
                                padding: 3,
                                backgroundColor: 'white',
                            }}
                        />
                    </View>
                    <View className="mr-4 bg-white rounded-xl border border-gray-300 px-4 py-2 "><Iconmini.UserPlusIcon size={20} color={'teal'} /></View>
                </View>
                <View className="flex-1 w-full ">
                    <View className="flex flex-row justify-between items-center gap-x-1 w-full p-2">
                        <View className="items-center flex-1 flex-row gap-2"><Text className="text-base text-gray-800">Name</Text>
                            <Iconmini.ArrowsUpDownIcon size={20} color={'black'} />
                        </View>
                        <Text className="flex text-gray-600 right-1">Swap to edit and delete</Text>
                    </View>
                    <View className="overflow-scroll px-2 bg-white">
                        <ListItemCutomer data={data} />
                    </View>
                </View>
            </View>

        </SafeAreaView>
    );
}

export default FulscreenModalCutomer