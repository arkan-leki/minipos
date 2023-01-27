import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Iconmini from "react-native-heroicons/mini";
import { SafeAreaView } from 'react-native-safe-area-context';
import CatModal from './CatModal';
import CustomerModal from './CutomerModal';
import NavSell from './NavSell';
import PosItem from './PosItem';
import UnitModal from './UnitModal';



const data = [
  { key: '1', text: 'Item 1' },
  { key: '2', text: 'Item 2' },
  { key: '3', text: 'Item 3' },
  { key: '4', text: 'Item 4' },
];

const Posterminal = () => {
  const navigation = useNavigation()

  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })

  const [unitmodalVisible, setUnitModalVisible] = useState(false);
  const [catmodalVisible, setCatModalVisible] = useState(false);
  const [customermodalVisible, setCustomerModalVisible] = useState(false);

  const openUnitModal = () => {
    setUnitModalVisible(true)
  };

  const closeUnitModal = () => {
    setUnitModalVisible(false);
  };

  const openCatModal = () => {
    setCatModalVisible(true)
  };

  const closeCatModal = () => {
    setCatModalVisible(false);
  };

  const openCustomeModal = () => {
    setCustomerModalVisible(true)
  };

  const closeCustomerModal = () => {
    setCustomerModalVisible(false);
  };

  return (
    <SafeAreaView className="flex-1 items-center bg-gray-200">
      <View className="flex flex-row w-full py-2 pt-6 bg-gray-700 absolute z-10 gap-2 items-center justify-start px-3">
        <TouchableOpacity onPress={() => {
          navigation.navigate("Home")
        }
        }>
          <Iconmini.ArrowLeftIcon color={'white'} size={30} />
        </TouchableOpacity>
        <Text className="text-xl font-semibold text-lime-50 text-left p-2">Pos Terminal</Text>
      </View>
      <View className="flex-1 w-full mt-14  bg-transparent">
        <Text className="px-4 text-gray-600 font-medium">Search of Scan</Text>
        <View className="flex flex-row items-center justify-start w-full">
          <View className="flex-1 flex-row justify-center items-center gap-x-1 m-4 my-2 border-2 rounded-xl border-gray-300  bg-white">
            <View className="px-2"><Iconmini.MagnifyingGlassIcon color={'gray'} size={20} /></View>
            <TextInput
              placeholder="Enter product name/code"
              style={{
                flex: 1,
                margin: 5,
                padding: 3,
                backgroundColor: 'white',
              }}
            />
            <View className="border-l  border-gray-400 px-2"><Iconmini.QrCodeIcon color={'gray'} size={20} /></View>
          </View>
          <View className="mr-4"><Iconmini.SquaresPlusIcon size={30} color={'teal'} /></View>
        </View>

        <View className="flex flex-row items-center justify-center bg-white px-2 h-12 w-full ">
          <TouchableOpacity onPress={openCatModal} className="flex flex-col justify-start border-r border-gray-300 h-10 w-1/3">
            <Text className="font-semibold text-xs">CATEGORY</Text>
            <View className="flex items-center flex-row "><Text className="text-xs flex-1">All Category</Text>
              <Iconmini.ChevronDownIcon color={'teal'} /></View>
            <CatModal modalVisible={catmodalVisible} closeModal={closeCatModal} />
          </TouchableOpacity>
          <TouchableOpacity onPress={openUnitModal} className="flex flex-col justify-start p-1 border-r border-gray-300 h-10 w-1/3">
            <Text className="font-semibold text-xs">UNIT</Text>
            <View className="flex items-center flex-row"><Text className="text-xs flex-1">All Unit</Text>
              <Iconmini.ChevronDownIcon color={'teal'} /></View>
            <UnitModal modalVisible={unitmodalVisible} closeModal={closeUnitModal} title={'Units'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={openCustomeModal} className="flex flex-col justify-start p-1 h-10s w-1/3">
            <Text className="font-semibold text-xs">CUSTOMER</Text>
            <View className="flex items-center flex-row "><Text className="text-xs flex-1">Daily</Text>
              <Iconmini.ChevronDownIcon color={'teal'} /></View>
            <CustomerModal modalVisible={customermodalVisible} closeModal={closeCustomerModal} />
          </TouchableOpacity>
        </View>

        <View className="mt-3 p-2 pt-0 h-[70%]">
          <View className="flex flex-row justify-between items-center gap-x-1 w-full">
            <View className="items-center flex-1 flex-row gap-2"><Text className="text-base text-gray-800">Name</Text>
              <Iconmini.ArrowsUpDownIcon size={20} color={'black'} />
            </View>
            <Text className="flex text-gray-600 right-0">Tap and hold cutomer q.ty</Text>
          </View>
          <ScrollView className="overflow-scroll w-full" alwaysBounceHorizontal={false} showsVerticalScrollIndicator={false}>
            <View className="flex-1 justify-start flex-row flex-wrap gap-2 my-1 items-center" >
              {data.map((v) =>
              (
                <PosItem key={v.key} item={v.text}/>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
      <NavSell />
    </SafeAreaView>
  )
}

export default Posterminal