import { useState } from 'react';
import { Modal, TouchableOpacity, Text, TouchableHighlight, View } from 'react-native';
import * as Iconmini from "react-native-heroicons/mini";

function SmallModal({ title, Contains }) {

    return (
        <View className="fixed inset-0 overflow-y-auto">
            <View className="relative flex items-center justify-center min-h-screen">
                <View className="absolute inset-0 bg-black  opacity-[0.5]"></View>
                <View className="relative z-10  w-full p-6 rounded-xl">
                    <View className="flex flex-row w-full bg-gray-700 items-center rounded-t-md justify-start px-3">
                        <Iconmini.CubeIcon color={'white'} />
                        <Text className="text-base font-semibold text-lime-50 text-left p-2">{title}</Text>
                    </View>
                    <View className="flex w-full bg-white rounded-b-md">
                        {Contains}
                    </View>
                </View>
            </View>
        </View>
    );
}

export default SmallModal;
