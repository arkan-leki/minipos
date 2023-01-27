import { useState } from 'react';
import { Modal, TouchableOpacity, Text, TouchableHighlight, View } from 'react-native';
import * as Iconmini from "react-native-heroicons/mini";
import SmallModal from './modal/SmallModal';

function OrderModal({ modalVisible, closeModal, data }) {
    const [number, setNumber] = useState(1);

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                closeModal();
            }}>

            <SmallModal title={'Adjust Item Qauntity'} closeModal={closeModal} data={data}
                Contains={
                    <>
                        <View className="flex flex-row p-2 w-full items-center justify-between">
                            <View className="flex">
                                <Text className="text-base font-semibold text-gray-500  p-2">Item</Text>
                                <Text className="text-base font-semibold text-gray-500 p-2">Stock Balance</Text>
                                <Text className="text-base font-semibold text-gray-500 p-2">Q.ty</Text>
                                <Text className="text-base font-semibold text-gray-500 p-2">Price</Text>
                            </View>
                            <View className="flex">
                                <Text className="text-base font-semibold text-gray-500 p-2">{'loremn this example, the slice() '.slice(0, 15) + '...'} {data}</Text>
                                <Text className="text-base font-semibold text-gray-500  p-2">-5</Text>
                                <View className={'flex flex-row items-center justify-center border-b '}>
                                    <TouchableOpacity onPress={() => { number > 1 && setNumber(number - 1); }}>
                                        <Iconmini.MinusCircleIcon color={'red'} className={(number < 2) ? `opacity-20` : ''} />
                                    </TouchableOpacity>
                                    <Text className={'text-base flex-1 p-2 text-center font-semibold'}>{number}</Text>
                                    <TouchableOpacity onPress={() => setNumber(number + 1)}>
                                        <Iconmini.PlusCircleIcon color={'teal'} />
                                    </TouchableOpacity>
                                </View>
                                <Text className="text-base font-bold text-teal-500 text-center p-2">$50,000.00</Text>
                            </View>

                        </View><View className="flex flex-row w-full p-2 justify-around items-center">
                            <TouchableHighlight onPress={() => {
                                closeModal();
                            }}
                                className="bg-teal-500 w-2/5 rounded-md">
                                <Text className="text-xl font-bold text-teal-50 text-center p-2">Ok</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => {
                                closeModal();
                            }}
                                className="bg-red-500 w-2/5 rounded-md">

                                <Text className="text-xl font-bold text-red-50 text-center p-2">Cancel</Text>
                            </TouchableHighlight>
                        </View>
                    </>
                }
            />
        </Modal>
    );
}

export default OrderModal;
