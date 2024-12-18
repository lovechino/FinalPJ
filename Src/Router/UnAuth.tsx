import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Welcome } from "../Public"
import { Login } from "../Public/Login"
import { Register } from "../Public/Register"
import { ForgotPassword } from "../Public/ForgotPassword"

export const UnAuth = ()=>{
    const Stack = createNativeStackNavigator()
    return(
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Welcome" component={Welcome}/>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
        </Stack.Navigator>
    )
}