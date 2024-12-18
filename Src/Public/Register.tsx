import { useState } from "react"
import { Dimensions, Text, TextInput, TouchableOpacity, View } from "react-native"

export const Register = () =>{
    const {height,width} = Dimensions.get('window')
    const[username,setUsername] = useState("")
    const[password,setPassword] = useState("")
    const[email,setEmail] = useState("")
    const[displayName,setDisplayName] = useState("")
    return(
        <View style = {{
            padding : 20
        }}>
            <Text style = {{
                textAlign :'center',
                marginTop : height /15
            }}>Register</Text>
            <Text style = {{
                textAlign :'center',
            }}>Create an account so you can add friends anywhere</Text>
            <View style = {{
                width : width *0.9,
                marginTop : height / 15,
                padding : 5,
            }}>
             <TextInput
                placeholder="Username"
                value= {username}
                onChangeText={e=>setUsername}
                style = {{
                    padding : 20,
                    backgroundColor :'#819897',
                    borderRadius : 10,        
                }}
                />
                 <TextInput
                placeholder="DisplayName"
                style = {{
                    padding : 20,
                    backgroundColor :'#819897',
                    borderRadius : 10,
                    marginTop : 10        
                }}
                />
            <TextInput
                placeholder="Email "
                style = {{
                    padding : 20,
                    backgroundColor :'#819897',
                    borderRadius : 10,
                    marginTop : 10        
                }}
                />
                <TextInput
                placeholder="Password"
                secureTextEntry
                style = {{
                    padding : 20,
                    backgroundColor :'#819897',
                    borderRadius : 10,
                    marginTop : 10        
                }}
                />
                <TextInput
                placeholder="Confirm Password"
                secureTextEntry
                style = {{
                    padding : 20,
                    backgroundColor :'#819897',
                    borderRadius : 10,
                    marginTop : 10        
                }}
                />
            </View>
            <TouchableOpacity style = {{
                 backgroundColor :'#00FFFF',
                 padding : 20,
                 borderRadius : 20
            }}>
                <Text style = {{
                    textAlign :'center'
                }}>Register Now</Text>
            </TouchableOpacity>

            <Text style = {{
                marginTop : height /15,
                textAlign :'center'
            }}>Or Register With</Text>

            <TouchableOpacity style = {{
                marginTop : height /15
            }}>
                <Text style = {{
                    textAlign :'center'
                }}>You have an account? Login Now</Text>
            </TouchableOpacity>
        </View>
    )
}