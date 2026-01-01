import { Client, Account, Databasesm, Avatars } from "react-native-appwrite";

export const client = new Client()
.setProject("69565284001a7cfeedc0") 
.setPlatform("com.crusoe.crusoe"); 

export const account = new Account(client)
export const avatars = new Avatars(client)