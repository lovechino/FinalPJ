import { Dimensions, Text, TextInput, TouchableOpacity, View } from "react-native"

export const ForgotPassword = ()=>{
    const {height} = Dimensions.get('window')
    return(
        <View style = {{
            padding : 20,
            // display :'flex',
            // justifyContent :'center',
            // alignItems :'center',
            // flex :1
        }}>
            <Text style = {{
                fontSize : 20 
            }}>Forgot  Password</Text>
            <Text style = {{
                fontSize : 15 
            }}>Enter your email</Text>
            <TextInput 
            placeholder="Username"
              style = {{
                padding : 20,
                backgroundColor :'#819897',
                borderRadius : 10, 
                marginTop : height /20       
            }}
            />
            <TouchableOpacity style = {{
                 backgroundColor :'#00FFFF',
                 padding : 20,
                 borderRadius : 30,
                 marginTop : height /20
            }}>
                <Text style = {{
                    textAlign :'center'
                }}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}