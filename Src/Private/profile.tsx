import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import { Avatar, Divider } from "react-native-elements"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { useState } from "react";

export const ProfileScreen = ()=>{
    const[current,setCurrent] = useState(0)
    return(
        <View>

            <View 
            style = {{
                marginTop : 20,
                flexDirection :'row',
                justifyContent :'space-between',
                alignItems :'center',
                marginHorizontal : 20
            }}
            >
                <View>
                  <Avatar size= "medium" source={require("../assets/Images/welcome-img.png")}/>
                  <Text style = {{textAlign :'center'}}>aaaaaaa</Text>
                </View>

               <View style = {{
                flexDirection :'row',
                marginHorizontal : 20,
                
               }}>
               <View>
                    <Text style = {{textAlign :'center'}}>1222</Text>
                    <Text>Stories</Text>
                </View>
                <View style = {{
                    marginLeft : 20
                }}>
                    <Text style = {{textAlign :'center'}}>2222</Text>
                    <Text>Followers</Text>
                </View>
                <View style = {{
                    marginLeft : 20
                }}>
                    <Text style = {{textAlign :'center'}}>222</Text>
                    <Text>Following</Text>
                </View>
               </View>
            </View>

            <View style = {{
                flexDirection : 'row',
                justifyContent : 'space-around',
                marginTop : 20
            }}>
                <TouchableOpacity style = {{
                     backgroundColor : '#00FFFF',
                     padding : 10,
                     width : '40%',
                     borderRadius : 10,
                     borderWidth : 1,
                }}
                >
                    <Text>Edit your profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {{
                     backgroundColor : '#00FFFF',
                     padding : 10,
                     width : '40%',
                     borderRadius : 10,
                     borderWidth : 1,
                }}>
                    <Text>Share your profile</Text>
                </TouchableOpacity>
            </View>

            <Divider width={1} orientation= "vertical" style = {{marginTop :5}}/>

            <View style = {{
                marginTop : 5,
                flexDirection :'row',
                justifyContent :'space-around'
            }}>
                <TouchableOpacity style = {{
                    backgroundColor : '#00FFFF',
                    padding : 10,
                    width : '40%',
                    borderRadius : 10,
                    borderWidth : 1,
                }}
                onPress={()=>setCurrent(0)}
                >
                   <Text style = {{
                    textAlign : 'center'
                   }}><Icon name="view-dashboard-variant" size={35}/></Text>              
                </TouchableOpacity>
                <TouchableOpacity style = {{
                    backgroundColor : '#00FFFF',
                    padding : 10,
                    width : '40%',
                    borderRadius : 10,
                    borderWidth : 1,
                }}
                onPress={()=>setCurrent(1)}
                >
                    <Text style = {{
                        textAlign :'center'
                    }}><Icon name="share" size={35}/></Text>
                </TouchableOpacity>
            </View>
            <Divider width={1} orientation= "vertical" style = {{marginTop :5}}/>
            <View>
                {current == 0 ? (
                    <Dashboard />
                ) : (
                    <Sharepost />
                )}
            </View>
        </View>
    )
}



const data = [
    {src : require('../assets/Images/welcome-img.png')},
    {src : require('../assets/Images/welcome-img.png')},
    {src : require('../assets/Images/welcome-img.png')},
    {src : require('../assets/Images/welcome-img.png')},
    {src : require('../assets/Images/welcome-img.png')},
    {src : require('../assets/Images/welcome-img.png')},
    {src : require('../assets/Images/welcome-img.png')},
    {src : require('../assets/Images/welcome-img.png')},
    {src : require('../assets/Images/welcome-img.png')},
    {src : require('../assets/Images/welcome-img.png')},
    {src : require('../assets/Images/welcome-img.png')},
    {src : require('../assets/Images/welcome-img.png')},
    {src : require('../assets/Images/welcome-img.png')},
    {src : require('../assets/Images/welcome-img.png')},
    {src : require('../assets/Images/welcome-img.png')},
    {src : require('../assets/Images/welcome-img.png')}
]

const Dashboard = ()=>{
    const {width,height} = Dimensions.get('window')
    return(
        <View style = {{
            display :'flex',
            justifyContent :'center',
            alignItems :'center',
            flexWrap : 'nowrap'
        }}>
           <FlatList
           numColumns={3}
           data={data}
           renderItem={({item})=>(
            <Image style = {{
                width : width/3,
                height : height/4
            }} source={item.src}/>
           )} 
           />
        </View>
    )
}

const Sharepost = ()=>{
    return(
        <View>
            <Text>Share</Text>
        </View>
    )
} 