import { Image, ScrollView, Text, View } from "react-native"

const data = [
    {id : 1,name :'aaaaa',src : require('../../assets/Images/welcome-img.png')},
    {id : 2,name :'aaaaa',src :  require('../../assets/Images/welcome-img.png')},
    {id : 3,name :'aaaaacccccccccccccccccccccccc',src :  require('../../assets/Images/welcome-img.png')},
    {id : 4,name :'aaaaa',src :  require('../../assets/Images/welcome-img.png')},
    {id : 5,name :'aaaaa',src :  require('../../assets/Images/welcome-img.png')},
    {id : 6,name :'aaaaa',src :  require('../../assets/Images/welcome-img.png')},
    {id : 7,name :'aaaaa',src :  require('../../assets/Images/welcome-img.png')},
    {id : 8,name :'aaaaa',src :  require('../../assets/Images/welcome-img.png')},
    {id : 9,name :'aaaaa',src :  require('../../assets/Images/welcome-img.png')},
    {id : 10,name :'aaaaa',src :  require('../../assets/Images/welcome-img.png')},
    {id : 11,name :'aaaaa',src :  require('../../assets/Images/welcome-img.png')},
    {id : 12,name :'aaaaa',src :  require('../../assets/Images/welcome-img.png')},
    {id : 13,name :'aaaaa',src :  require('../../assets/Images/welcome-img.png')},
    {id : 14,name :'aaaaa',src :  require('../../assets/Images/welcome-img.png')},
    {id : 15,name :'aaaaa',src :  require('../../assets/Images/welcome-img.png')}
]

export const Stories = ()=>{
    return(
        <View style = {{}}>
            <Text style = {{color :'black'}}>STORIES</Text>
            <ScrollView
              horizontal
            showsHorizontalScrollIndicator = {false} 
            >
                {data.map((item)=>(
                    <View key={item.id} style = {{alignItems :'center'}}>
                      <Image style = {{height : 80,width :80,borderRadius :50,marginLeft :6,borderWidth :3,borderColor :"#ff8501"}} source={item.src}/>
                      <Text>{
                        item.name.length > 10 ? item.name.slice(0,10) + '...' : item.name
                        }</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}