import { Image, ScrollView, Text, View } from "react-native"
import { Divider } from "react-native-elements"
import Icon from "react-native-vector-icons/AntDesign"
import Ioncon from "react-native-vector-icons/FontAwesome"

const data = [
    {id : 1,name :'aaaaa',src : require('../../assets/Images//welcome-img.png')},
    {id : 2,name :'aaaaa',src :  require('../../assets/Images//welcome-img.png')},
    {id : 3,name :'aaaaacccccccccccccccccccccccc',src :  require('../../assets/Images//welcome-img.png')},
    {id : 4,name :'aaaaa',src :  require('../../assets/Images//welcome-img.png')},
    {id : 5,name :'aaaaa',src :  require('../../assets/Images//welcome-img.png')},
    {id : 6,name :'aaaaa',src :  require('../../assets/Images//welcome-img.png')},
    {id : 7,name :'aaaaa',src :  require('../../assets/Images//welcome-img.png')},
    {id : 8,name :'aaaaa',src :  require('../../assets/Images//welcome-img.png')},
    {id : 9,name :'aaaaa',src :  require('../../assets/Images//welcome-img.png')},
    {id : 10,name :'aaaaa',src :  require('../../assets/Images//welcome-img.png')},
    {id : 11,name :'aaaaa',src :  require('../../assets/Images//welcome-img.png')},
    {id : 12,name :'aaaaa',src :  require('../../assets/Images//welcome-img.png')},
    {id : 13,name :'aaaaa',src :  require('../../assets/Images//welcome-img.png')},
    {id : 14,name :'aaaaa',src :  require('../../assets/Images//welcome-img.png')},
    {id : 15,name :'aaaaa',src :  require('../../assets/Images//welcome-img.png')}
]

const postData = [
    {
        imgUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Faker_2020_interview.jpg/250px-Faker_2020_interview.jpg",
        user : data[0].name,
        likes : 7878,
        caption : "hafsdfsfdsfsdfsdfds",
        profile_picture : data[0].src,
        comments :[
            {
                user : 'adasdasdasd',
                comment :'now fukcdsjiisdoiosiocidoscioscio'
            },
            {
                user : 'adasdasdasd',
                comment :'now fukcdsjiisdoiosiocidoscioscio'
            }
        ]
    },
    {
        imgUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Faker_2020_interview.jpg/250px-Faker_2020_interview.jpg",
        user : data[1].name,
        likes : 7878,
        caption : "hafsdfsfdsfsdfsdfds",
        profile_picture : data[1].src,
        comments :[
            {
                user : 'adasdasdasd',
                comment :'now fukcdsjiisdoiosiocidoscioscio'
            },
            {
                user : 'adasdasdasd',
                comment :'now fukcdsjiisdoiosiocidoscioscio'
            }
        ]
    },
    {
        imgUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Faker_2020_interview.jpg/250px-Faker_2020_interview.jpg",
        user : data[1].name,
        likes : 7878,
        caption : "hafsdfsfdsfsdfsdfds",
        profile_picture : data[1].src,
        comments :[
            {
                user : 'adasdasdasd',
                comment :'now fukcdsjiisdoiosiocidoscioscio'
            },
            {
                user : 'adasdasdasd',
                comment :'now fukcdsjiisdoiosiocidoscioscio'
            }
        ]
    },
    {
        imgUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Faker_2020_interview.jpg/250px-Faker_2020_interview.jpg",
        user : data[1].name,
        likes : 7878,
        caption : "hafsdfsfdsfsdfsdfds",
        profile_picture : data[1].src,
        comments :[
            {
                user : 'adasdasdasd',
                comment :'now fukcdsjiisdoiosiocidoscioscio'
            },
            {
                user : 'adasdasdasd',
                comment :'now fukcdsjiisdoiosiocidoscioscio'
            }
        ]
    }
]


type commentsvalue = {
    user : String,
    comment : String
}

type postvalue = {
    imgUrl : String,
    user : String,
    likes : number,
    caption : String,
    profile_picture : String,
    comments : Array<commentsvalue>
}

const Post = (post : postvalue)=>{
    return(
        <View style = {{marginTop : 5}}>
            <Divider width={1} orientation= "vertical"/>
            <View style = {{
                flexDirection :'row',
                justifyContent :'space-between',
                margin : 5,
                alignItems :'center'
            }}>
                <View style = {{
                    flexDirection :'row',
                    alignItems :'center'
                }}>
                <Image source={post.profile_picture} style = {{
                    width : 70,
                    height : 70,
                    borderRadius : 50,
                    marginLeft : 6,
                    borderWidth : 3,
                    borderColor :'#ff8501'
                }}/>
                <Text style = {{
                    fontWeight : 700,
                    textAlign :'center'
                }}>{post.user}</Text>
                </View>
                <Text style = {{fontWeight :900}}>.....</Text>
            </View>
            <View style = {{
                width : '100%',
                height : 450
            }}>
                <Image source={{uri : post.imgUrl}} style = {{height : '100%',resizeMode :'cover'}}/>
            </View>
            <View style = {{
                flexDirection : 'row',
                justifyContent :'space-between',
                marginLeft : 5
            }}>
                 <View>
                 <Icon name="heart" color= "red" size={30}/>
                 <Text>{post.likes}</Text>
                 </View>
                 <Ioncon name="comments" size={30}/>
                 <Ioncon name="share" size={30}/>
            </View>
            <View style = {{marginTop : 5,marginLeft : 5}}>
                <Text>
                  <Text style = {{fontWeight : 600}}>{post.user}</Text>
                  <Text>  {post.caption}</Text>
                </Text>
            </View>
        </View>
    )
}


export const ListPost = ()=>{
    return(
        <ScrollView
        showsVerticalScrollIndicator = {false}
        >
            {postData.map((item,key)=>(
                <Post key={key} imgUrl={item.imgUrl} user={item.user} likes={item.likes} caption={item.caption} profile_picture={item.profile_picture} comments={item.comments}/>
            ))}
        </ScrollView>
    )
}