import { ScrollView, Text, View } from "react-native"
import { Avatar } from "react-native-elements"
import Icon from "react-native-vector-icons/FontAwesome"

const data = [
    {id : 1,name :'aaaaa',src : require('../assets/Images/welcome-img.png')},
    {id : 2,name :'aaaaa',src :  require('../assets/Images/welcome-img.png')},
    {id : 3,name :'aaaaacccccccccccccccccccccccc',src :  require('../assets/Images/welcome-img.png')},
    {id : 4,name :'aaaaa',src :  require('../assets/Images/welcome-img.png')},
    {id : 5,name :'aaaaa',src :  require('../assets/Images/welcome-img.png')},
    {id : 6,name :'aaaaa',src :  require('../assets/Images/welcome-img.png')},
    {id : 7,name :'aaaaa',src :  require('../assets/Images/welcome-img.png')},
    {id : 8,name :'aaaaa',src :  require('../assets/Images/welcome-img.png')},
    {id : 9,name :'aaaaa',src :  require('../assets/Images/welcome-img.png')},
    {id : 10,name :'aaaaa',src :  require('../assets/Images/welcome-img.png')},
    {id : 11,name :'aaaaa',src :  require('../assets/Images/welcome-img.png')},
    {id : 12,name :'aaaaa',src :  require('../assets/Images/welcome-img.png')},
    {id : 13,name :'aaaaa',src :  require('../assets/Images/welcome-img.png')},
    {id : 14,name :'aaaaa',src :  require('../assets/Images/welcome-img.png')},
    {id : 15,name :'aaaaa',src :  require('../assets/Images/welcome-img.png')}
]


const ListUserOnline = ()=>{
    return(
        <View style = {{marginTop : 5,marginHorizontal : 15}}>
            <Text>List Online User</Text>
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator = {false}>
                {data.map((item)=>(
                    <View key={item.id}>
                        <View>
                          <Avatar size= "large" source={item.src} rounded/>
                          <Icon style = {{
                             position :'absolute',
                             right : 1,
                             bottom : 1,
                             width : 25,
                             height : 18,
                             zIndex :100,
                          }} name="circle" size= {15} color= "green"/>
                        </View>
                        <Text style = {{
                            textAlign :'center'
                        }}>{item.name.length > 11 ? item.name.slice(0,5)+"...." : item.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}


const ListMess = ()=>{
    return(
        <View></View>
    )
}

export const MessScreen = ()=>{
    return(
        <View>
            <ListUserOnline />
        </View>
    )
}