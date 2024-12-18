import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react"

export type User = {
    displayName : String
}

export interface UserContextInterface {
    user : User,
    setUser : Dispatch<SetStateAction<User>>
}

const defaultState = {
    user :{
        displayName : ''
    },
    setUser : (user : User)=>{}
} as UserContextInterface

export const UserContext = createContext<UserContextInterface>(defaultState)

type UserProviderProps = {
    children : ReactNode
}

export const UserProvider = ({children} : UserProviderProps)=>{
    const [user , setUser] = useState<User>({
        displayName : ''
    })
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}