import { Dimensions,  ImageBackground, Text, TouchableOpacity, View } from "react-native"

export const Welcome = () =>{
    const {height} = Dimensions.get("window")
    return(
        <View style = {{
            display : 'flex'
        }}>
            <View>
               <ImageBackground
                style = {{
                    height : height / 2
                }}
               source={require("../assets/Images/welcome-img.png")} 
               />
            </View>
            <View>
                    <Text style = {{
                        textAlign : 'center',
                        marginTop : 20,
                        fontStyle : 'italic',
                        fontSize : 20
                    }}>Just A Chill Guy!</Text>
                </View>
            
                <View style = {{
                   display : 'flex',
                   flexDirection : 'row',
                   justifyContent : 'space-around',
                   marginTop : height /6
                }}>
                <TouchableOpacity style = {{
                    backgroundColor : '#00FFFF',
                    padding : 10,
                    width : '48%',
                    borderRadius : 10,
                    borderWidth : 1,

                }}>
                    <Text style = {{
                        fontSize : 20,
                        textAlign :'center'
                    }}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {{
                    backgroundColor : '#00FFFF',
                    padding : 10,
                    width : '48%',
                    borderRadius : 10,
                }}>
                    <Text style = {{
                        fontSize : 20,
                        textAlign :'center'
                    }}>Register</Text>
                </TouchableOpacity>
                </View>
        </View>
    )
}