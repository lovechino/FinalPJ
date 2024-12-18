import { NavigationContainer } from "@react-navigation/native"
import { UnAuth } from "./UnAuth"
import { AuthRouter } from "./AuthRouter"


export const RootStack = ()=>{
    
    return(
        <NavigationContainer>
            {/* <UnAuth /> */}
            <AuthRouter/>
        </NavigationContainer>
    )
}