import React from 'react'
import { Image, Text, View } from 'react-native'

const WareHouseItem = ({data}) => {
    return (
        <View className="flex flex-grow w-full border-b p-2 border-gray-300">
            <View className="flex flex-row justify-between items-center">
                <Image source={require('../images/image.png')}
                    style={{
                        width: 50,
                        height: 50,
                        resizeMode: 'contain'
                    }} />
                <View className="flex-1 flex-col h-full p-2">
                    <Text className="font-semibold text-base ">Ban Chai Dang reng PS</Text>
                    <Text className="font-sm text-sm ">0959275750923 - Cai</Text>
                </View>
                <View className="flex items-center flex-col h-full p-2">
                    <Text className="font-light text-base ">Blanced: {data}</Text>
                    <Text className="font-semibold text-base text-red-600">$15,000.00</Text>
                </View>
            </View>
        </View>
    )
}

export default WareHouseItem