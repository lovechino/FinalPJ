import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { HomeScreen } from "../Private/home"
import { ProfileScreen } from "../Private/profile"
import Icon from "react-native-vector-icons/FontAwesome"
import Ionon from "react-native-vector-icons/AntDesign"
import { MessScreen } from "../Private/message"

const bottomTab = createBottomTabNavigator()

export const AuthRouter = ()=>{
    return(
        <bottomTab.Navigator screenOptions={{
            headerShown : false
        }}>
            <bottomTab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon :()=>{
                    return <Icon name="home" size={24} color="#000" />
                }
            }}
            />
            <bottomTab.Screen name="Profile" component={ProfileScreen}  options={{
                tabBarIcon :()=>{
                    return <Icon name="user" size={24} color="#000" />
                }
            }}/>
            <bottomTab.Screen name="Message" component={MessScreen} options={{
                tabBarIcon :()=>{
                    return <Ionon name="message1" size={24} color= "#000"/>
                }
            }}/>
        </bottomTab.Navigator>
    )
}