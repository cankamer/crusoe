import { createContext, useState } from 'react'
import {account} from '../lib/appwrite'
import { ID } from 'react-native-appwrite'

export const UserContext = createContext()


export function UserProvider({ children }) {

    const [user, setUser] = useState(null)

    async function login(email, password) {
        try {
            await account.createEmailPasswordSession(email, password)
            const response = await account.get()
            setUser(response)
        } catch (error) {
            console.log(error.message)
            
        }
    }

    async function logout() {
    }

     async function register(email, password, name) {
        try {
            await account.create(ID.unique(), email, password, name)
            await login(email, password)
        } catch (error) {
            console.log(error.message)
            
        }
    }
    return (
        <UserContext.Provider value={{user, login, register, logout}}>
            {children}
        </UserContext.Provider>
    )

}
