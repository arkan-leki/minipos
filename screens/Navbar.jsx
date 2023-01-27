import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const Navbar = ({selc}) => {
    const navigation = useNavigation()

    return (

        <View className="bg-white h-fit py-1  w-full flex flex-row justify-around absolute z-10 bottom-0 border-t-2 border-gray-100 shadow-md">
            <TouchableOpacity
                className="flex items-center justify-center "
                onPress={() => {
                    navigation.navigate("Home")
                }
                }>
                { }
                {(selc === 'Home') ? <Image source={require('../images/market.png')}
                    style={{
                        width: 30,
                        height: 30,
                        resizeMode: 'contain'
                    }}
                />
                    : <Image source={require('../images/marketalt.png')}
                        style={{
                            width: 30,
                            height: 30,
                            resizeMode: 'contain'
                        }}
                    />}
                {(selc === 'Home') ? <Text className="font-medium text-sm text-teal-700">Manages</Text> : <Text className="font-medium text-sm text-gray-700">Manages</Text>
                }
            </TouchableOpacity>
            <TouchableOpacity className="flex items-center justify-center "
                onPress={() => {
                    navigation.navigate("WareHouse")
                }
                }>
                {(selc === 'WareHouse') ? <Image source={require('../images/warehouse.png')}
                    style={{
                        width: 30,
                        height: 30,
                        resizeMode: 'contain'
                    }} />
                    : <Image source={require('../images/warehousealt.png')}
                        style={{
                            width: 30,
                            height: 30,
                            resizeMode: 'contain'
                        }}
                    />}
                {(selc === 'WareHouse') ? <Text className="font-medium text-sm text-teal-700">WareHouse</Text> : <Text className="font-medium text-sm text-gray-700">WareHouse</Text>
                }
            </TouchableOpacity>
            <TouchableOpacity className="flex items-center justify-center ">
                <Image source={require('../images/settingalt.png')}
                    style={{
                        width: 30,
                        height: 30,
                        resizeMode: 'contain'
                    }}
                />
                {(selc === 'Settings') ? <Text className="font-medium text-sm text-teal-700">Settings</Text> : <Text className="font-medium text-sm text-gray-700">Settings</Text>}
            </TouchableOpacity>
            <TouchableOpacity className="flex items-center justify-center ">
                <Image source={require('../images/infoalt.png')}
                    style={{
                        width: 30,
                        height: 30,
                        resizeMode: 'contain'
                    }}
                />
                {(selc === 'Info') ? <Text className="font-medium text-sm text-teal-700">Info</Text> : <Text className="font-medium text-sm text-gray-700">Info</Text>}
            </TouchableOpacity>
        </View>

    )
}

export default Navbar