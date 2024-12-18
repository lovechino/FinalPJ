import { useNavigation } from "@react-navigation/native"
import { useContext, useState } from "react"
import { Dimensions, Text, TextInput, TouchableOpacity, View } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { LoginUser } from "../API/AuthApi"
import { UserContext } from "../Context/UserContext"

export const Login = () =>{
    // const navigation = useNavigation()
    const {height,width} = Dimensions.get("window")
    const {user,setUser} = useContext(UserContext)
    const[username,setUsername] = useState("")
    const[pasword,setPassword] = useState("")
    const testLogin = async()=>{
        // const data = await LoginUser({username : username,password : pasword}).then(res=>res)
        // console.log(data)
        setUser({
            displayName : username
        })
    }
    const testValue = ()=>{
        console.log(user)
    }
    return(
        <View style = {{
            padding : 20,
        }}>
            <Text style = {{
                fontSize: 20,
                fontStyle : 'italic',
                textAlign :'center',
                marginVertical : 50
            }}>Login Here</Text>
            <Text
            style={{
               textAlign :'center'
            }}
            >Welcome back you've been missed</Text>
            <View style = {{
                marginTop : height /10,
                width : width * 0.9,
               
            }}>
                <TextInput
                value= {username}
                onChangeText={e=>setUsername(e)}
                placeholder="Email"
                style = {{
                    padding : 20,
                    backgroundColor :'#819897',
                    borderRadius : 10,        
                }}
                />
                 <TextInput
                 secureTextEntry
                placeholder="Password"
                value= {pasword}
                onChangeText={e=>setPassword(e)}
                style = {{
                    padding : 20,
                    backgroundColor :'#819897',
                    borderRadius : 10,
                    marginTop : 10
                }}
                />
            </View>
            <View>
                <Text style = {{
                    textAlign :'right',
                    marginVertical : 10
                }}>Forgot Password?</Text>
            </View>
            <TouchableOpacity style = {{
                padding : 20,
                backgroundColor :'#00FFFF',
                borderRadius : 10,
                marginTop : height /15,
                shadowOffset :{
                    width : 0,
                    height : 10
                },
                shadowOpacity : 0.3,
                shadowRadius : 20
            }}
            onPress={()=>testLogin()}
            >
                <Text style = {{
                    textAlign :'center',
                    fontStyle :'italic',
                }}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{
                padding : 20
            }}>
                <Text style = {{
                    textAlign :'center'
                }}>Create new account</Text>
            </TouchableOpacity>
            <Text style = {{
                textAlign :'center',
                color :'#0000FF'
            }}> Or login with</Text>
          
          <View style = {{
                   display : 'flex',
                   flexDirection : 'row',
                   justifyContent : 'space-around',
                   
                }}>
                    
                <TouchableOpacity style = {{
                    // backgroundColor : '#00FFFF',
                    padding : 10,
                    width : '48%',
                    borderRadius : 10,
                    // borderWidth : 1,
                }}
                onPress={()=>testValue()}
                >
                    <Text style = {{
                    textAlign :'center'
                   }}><Icon name = "google" color = "green" size = {30}/></Text>
                </TouchableOpacity>
                                
                </View>

        </View>
    )
}


