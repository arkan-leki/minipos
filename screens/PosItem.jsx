import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import OrderModal from './OrderModal'

const PosItem = ({item}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true)
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <>
            <TouchableOpacity onLongPress={openModal}
                className="flex flex-col w-[31%] h-40 m-1 bg-white border border-gray-300 justify-start items-center rounded-xl" >
                <View className="shadow-inner bg-gray-300 bg-gradient-to-b w-full rounded-t-xl items-center">
                    <Image source={require('../images/image.png')}
                        style={{
                            width: 90 + '%',
                            height: 60,
                            resizeMode: 'stretch',
                        }}
                    />
                </View>
                <View className="flex-1 items-center flex-col w-full p-2  justify-around ">
                    <Text className="font-semibold text-sm whitespace-wrap text-center text-gray-500">Ban Chai Dang reng PS {item}</Text>
                    <Text className="font-bold text-base text-gray-800 whitespace-nowrap w-f">$15,000.00</Text>
                </View>
            </TouchableOpacity>
            <OrderModal modalVisible={modalVisible} closeModal={closeModal} data={item} />
        </>
    )
}

export default PosItem