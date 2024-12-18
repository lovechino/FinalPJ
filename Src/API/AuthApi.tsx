import axios from "axios"
type Login = {
    username : String,
    password : String 
}

export const LoginUser = async (data : Login) =>{
    return await axios.post("http://192.168.5.7:3000/auth/local/login",data)
    .then(res =>res.data).catch(err => console.log(err))
}

type Register = {
    username : String,
    password : String,
    email : String,
    displayName : String
}

export const RegisterUser = async(data : Register) =>{
    return await axios.post("http://192.168.5.7:3000/auth/local/register",data)
    .then(res => res.data).catch(err => console.log(err))
}