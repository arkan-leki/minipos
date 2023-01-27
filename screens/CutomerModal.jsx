import React, { useState } from 'react';
import { Modal, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import * as Iconmini from "react-native-heroicons/mini";
import { useNavigation } from '@react-navigation/native';
import FulscreenModal from './modal/FulscreenModal';
import SmallModal2 from './modal/SmallModalWhite';
import FulscreenModalCutomer from './modal/FulscreenModalCutomer';

function CutomerModal({ modalVisible, closeModal }) {
    const [catmodalVisible, setCatModalVisible] = useState(false);

    const openCatModal = () => {
        setCatModalVisible(true)
    };

    const closeCatModal = () => {
        setCatModalVisible(false);
    };

    React.useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    })    
    
    const navigation = useNavigation()

    React.useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    })

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                closeModal();
            }}>
            <FulscreenModalCutomer closeModal={closeModal} title="Cutomers" />
            <TouchableOpacity className="bg-teal-600 rounded-full absolute z-20  bottom-5 right-3 p-3 shadow-md border border-white"
                onPress={() => {
                    openCatModal()
                }
                }>
                <Iconmini.PlusIcon color={'white'} size={30} />
            </TouchableOpacity>

            <Modal
                animationType="fade"
                transparent={true}
                visible={catmodalVisible}
                onRequestClose={() => {
                    closeCatModal();
                }}>

                <SmallModal2 title={'Add Unit'} closeModal={closeCatModal} data={[]}
                    Contains={
                        <>
                            <View className="flex flex-col p-2 gap-2 w-full items-center justify-between">
                                <View className="w-[90%] ">
                                    <TextInput
                                        placeholder="Unit name"
                                        // value={}
                                        // onChangeText={setText}
                                        className="h-12 border-b border-gray-300 text-xl"
                                    />
                                </View>
                                <View className="w-[90%]">
                                    <TextInput
                                        placeholder="Notes:"
                                        // value={}
                                        // onChangeText={setText}
                                        className="h-12 border-b border-gray-300 text-xl"
                                    />
                                </View>

                            </View><View className="flex flex-row w-full py-4 gap-1 justify-center items-center">
                                <TouchableHighlight onPress={() => {
                                    closeCatModal();
                                }}
                                    className="bg-teal-500 w-2/5 rounded-l-2xl">
                                    <View className="flex flex-row w-full  justify-center items-center">
                                        <Text className="text-xl font-bold text-teal-50 text-center p-1">Ok</Text>
                                        <Iconmini.CheckIcon color={'white'} />
                                    </View>

                                </TouchableHighlight>
                                <TouchableHighlight onPress={() => {
                                    closeCatModal();
                                }}
                                    className="bg-red-500 w-2/5 rounded-r-2xl">
                                    <View className="flex flex-row w-full  justify-center items-center">
                                        <Text className="text-xl font-bold text-teal-50 text-center p-1">Cancel</Text>
                                        <Iconmini.BackspaceIcon color={'white'} />
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </>
                    }
                />
            </Modal>
        </Modal>
    );
}

export default CutomerModal;
