import { Text, TouchableOpacity, View } from 'react-native';
import * as Iconmini from "react-native-heroicons/mini";

const NavSell = () => {
    return (
        <View className="bg-white h-16 py-1 w-full flex flex-row justify-evenly items-center absolute z-10 bottom-0 border-t border-gray-300 shadow-md shadow-slate-400 gap-1 p-2 ">
            <TouchableOpacity className="bg-gray-200 rounded-md p-2 border border-gray-300">
                <View className="bg-red-600 rounded-md p-1"><Iconmini.XMarkIcon size={20} color={'white'} /></View>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 flex-row bg-teal-600 rounded-md p-3 items-center gap-x-2">
                <Iconmini.ShoppingBagIcon size={20} color={'white'}/>
                <Text className="text-white flex-1">{3} Items = ${'50,000.00'}</Text>
                <Iconmini.ChevronRightIcon size={20} color={'white'} />
            </TouchableOpacity>
        </View>
    )
}

export default NavSell