import { useState } from 'react';
import { Modal, TouchableOpacity, Text, TouchableHighlight, View } from 'react-native';
import * as Iconmini from "react-native-heroicons/mini";

function SmallModal2({ title, Contains }) {

    return (
        <View className="fixed inset-0 overflow-y-auto">
            <View className="relative flex items-center justify-center min-h-screen">
                <View className="absolute inset-0 bg-black  opacity-[0.5] "></View>
                <View className="relative z-10 w-full p-4 rounded-xl">
                    <View className="flex flex-row w-full bg-gray-50 items-center rounded-t-2xl justify-start p-2">
                        <Iconmini.TagIcon color={'teal'} />
                        <Text className="text-xl font-bold text-teal-600 text-left p-2">{title}</Text>
                    </View>
                    <View className="flex w-full bg-white rounded-b-2xl">
                        {Contains}
                    </View>
                </View>
            </View>
        </View>
    );
}

export default SmallModal2;
