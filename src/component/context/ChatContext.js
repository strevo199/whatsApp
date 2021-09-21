import React,{createContext,useReducer} from 'react'
import { useHistory } from 'react-router-dom';
import uuid from 'uuid';
import chatReducer from '../reducer/chatReducer';

export const ChatContext = createContext()

const initialState = {
    myChats:[
        {
            id:uuid(),
            user:
                { 
                    user_id:uuid(),
                    user_phoneNumber:'+2348100867280',
                    user_about:{msg:' i am the boss',time_updated:'1/08/21'},
                    user_photo:'../img/img1.jpeg',
                    user_name:'stevo lala',               
                },
            chats:[
                {chat_id:uuid(),time:'1/08/21',msg:'i am coming over to you house plz.     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.to cheh on you plx ooo'},
                {chat_id:uuid(),time:'15/5/21',msg:'i am coming over to you house plz.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab. to cheh on you plx ooo'},
                {chat_id:uuid(),time:'1/6/21',msg:'i am coming over to you house plz.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab. to cheh on you plx ooo'},
                {chat_id:uuid(),time:'1/10/21',msg:'i am coming over to you house plz.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab. to cheh on you plx ooo'},
                {chat_id:uuid(),time:'2/1/21',msg:'i am coming over to you house plz. to cheh on you plx ooo     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.'},
                {chat_id:uuid(),time:'2/12/21',msg:'i am coming over to you house plz. to cheh on you plx ooo     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaq'},
                {chat_id:uuid(),time:'2/12/21',msg:'i am coming over to you house plz. to cheh      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.on you plx ooo'},
                {chat_id:uuid(),time:'1/12/21',msg:'i am     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.coming over to you house plz. to cheh on you plx ooo'},
                {chat_id:uuid(),time:'9/12/21',msg:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.'} 
            ]
        },
        {
            id:uuid(),

            user:
                { 
                    user_id:uuid(),
                    user_phoneNumber:'+2348949389360',
                    user_about:{msg:' Heaven is Real',time_updated:'1/08/21'},
                    user_photo:'../img/cee.jpg',
                    user_name:'John Doe',               
                },
            chats:[
                {chat_id:uuid(),time:'1/08/21',msg:'i am coming over to you house plz.     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.to cheh on you plx ooo'},
                {chat_id:uuid(),time:'15/5/21',msg:'i am coming over to you house plz.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab. to cheh on you plx ooo'},
                {chat_id:uuid(),time:'1/6/21',msg:'i am coming over to you house plz.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab. to cheh on you plx ooo'},
                {chat_id:uuid(),time:'1/10/21',msg:'i am coming over to you house plz.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab. to cheh on you plx ooo'},
                {chat_id:uuid(),time:'2/1/21',msg:'i am coming over to you house plz. to cheh on you plx ooo     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.'},
                {chat_id:uuid(),time:'2/12/21',msg:'i am coming over to you house plz. to cheh on you plx ooo     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaq'},
                {chat_id:uuid(),time:'2/12/21',msg:'i am coming over to you house plz. to cheh      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.on you plx ooo'},
                {chat_id:uuid(),time:'1/12/21',msg:'i am     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.coming over to you house plz. to cheh on you plx ooo'},
                {chat_id:uuid(),time:'9/12/21',msg:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.'} 
            ]
        },
        {
            id:uuid(),

            user:
                { 
                    user_id:uuid(),
                    user_phoneNumber:'+23477789360',
                    user_about:{msg:' Heaven is Real',time_updated:'1/08/21'},
                    user_photo:'../img/bg2.jpg',
                    user_name:'Isaac Willy',               
                },
            chats:[
                {chat_id:uuid(),time:'1/08/21',msg:'i am coming over to you house plz.     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.to cheh on you plx ooo'},
                {chat_id:uuid(),time:'15/5/21',msg:'i am coming over to you house plz.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab. to cheh on you plx ooo'},
                {chat_id:uuid(),time:'1/6/21',msg:'i am coming over to you house plz.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab. to cheh on you plx ooo'},
                {chat_id:uuid(),time:'1/10/21',msg:'i am coming over to you house plz.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab. to cheh on you plx ooo'},
                {chat_id:uuid(),time:'2/1/21',msg:'i am coming over to you house plz. to cheh on you plx ooo     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.'},
                {chat_id:uuid(),time:'2/12/21',msg:'i am coming over to you house plz. to cheh on you plx ooo     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaq'},
                {chat_id:uuid(),time:'2/12/21',msg:'i am coming over to you house plz. to cheh      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.on you plx ooo'},
                {chat_id:uuid(),time:'1/12/21',msg:'i am     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.coming over to you house plz. to cheh on you plx ooo'},
                {chat_id:uuid(),time:'9/12/21',msg:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.'} 
            ]
        },
        {
            id:uuid(),

            user:
                { 
                    user_id:uuid(),
                    user_phoneNumber:'+23477789360',
                    user_about:{msg:'We Move',time_updated:'1/08/21'},
                    user_photo:'../img/bg2.jpg',
                    user_name:'Brother Lati',               
                },
            chats:[
                {chat_id:uuid(),time:'1/08/21',msg:'i am coming over to you house plz.     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.to cheh on you plx ooo'},
                {chat_id:uuid(),time:'15/5/21',msg:'i am coming over to you house plz.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab. to cheh on you plx ooo'},
                {chat_id:uuid(),time:'1/6/21',msg:'i am coming over to you house plz.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab. to cheh on you plx ooo'},
                {chat_id:uuid(),time:'1/10/21',msg:'i am coming over to you house plz.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab. to cheh on you plx ooo'},
                {chat_id:uuid(),time:'2/1/21',msg:'i am coming over to you house plz. to cheh on you plx ooo     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.'},
                {chat_id:uuid(),time:'2/12/21',msg:'i am coming over to you house plz. to cheh on you plx ooo     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaq'},
                {chat_id:uuid(),time:'2/12/21',msg:'i am coming over to you house plz. to cheh      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.on you plx ooo'},
                {chat_id:uuid(),time:'1/12/21',msg:'i am     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.coming over to you house plz. to cheh on you plx ooo'},
                {chat_id:uuid(),time:'9/12/21',msg:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.'} 
            ]
        },
        {
            id:uuid(),
            user:
                { 
                    user_id:uuid(),
                    user_phoneNumber:'+2348100867280',
                    user_about:{msg:' i am the boss',time_updated:'1/08/21'},
                    user_photo:'../img/img1.jpeg',
                    user_name:'stevo lala',               
                },
            chats:[
                {chat_id:uuid(),time:'1/08/21',msg:'i am coming over to you house plz.     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.to cheh on you plx ooo'},
                {chat_id:uuid(),time:'15/5/21',msg:'i am coming over to you house plz.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab. to cheh on you plx ooo'},
                {chat_id:uuid(),time:'1/6/21',msg:'i am coming over to you house plz.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab. to cheh on you plx ooo'},
                {chat_id:uuid(),time:'1/10/21',msg:'i am coming over to you house plz.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab. to cheh on you plx ooo'},
                {chat_id:uuid(),time:'2/1/21',msg:'i am coming over to you house plz. to cheh on you plx ooo     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.'},
                {chat_id:uuid(),time:'2/12/21',msg:'i am coming over to you house plz. to cheh on you plx ooo     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaq'},
                {chat_id:uuid(),time:'2/12/21',msg:'i am coming over to you house plz. to cheh      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.on you plx ooo'},
                {chat_id:uuid(),time:'1/12/21',msg:'i am     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.coming over to you house plz. to cheh on you plx ooo'},
                {chat_id:uuid(),time:'9/12/21',msg:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.'} 
            ]
        },
        {
            id:uuid(),

            user:
                { 
                    user_id:uuid(),
                    user_phoneNumber:'+2348949389360',
                    user_about:{msg:' Heaven is Real',time_updated:'1/08/21'},
                    user_photo:'../img/cee.jpg',
                    user_name:'John Doe',               
                },
            chats:[
                {chat_id:uuid(),time:'1/08/21',msg:'i am coming over to you house plz.     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.to cheh on you plx ooo'},
                {chat_id:uuid(),time:'15/5/21',msg:'i am coming over to you house plz.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab. to cheh on you plx ooo'},
                {chat_id:uuid(),time:'1/6/21',msg:'i am coming over to you house plz.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab. to cheh on you plx ooo'},
                {chat_id:uuid(),time:'1/10/21',msg:'i am coming over to you house plz.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab. to cheh on you plx ooo'},
                {chat_id:uuid(),time:'2/1/21',msg:'i am coming over to you house plz. to cheh on you plx ooo     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.'},
                {chat_id:uuid(),time:'2/12/21',msg:'i am coming over to you house plz. to cheh on you plx ooo     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaq'},
                {chat_id:uuid(),time:'2/12/21',msg:'i am coming over to you house plz. to cheh      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.on you plx ooo'},
                {chat_id:uuid(),time:'1/12/21',msg:'i am     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.coming over to you house plz. to cheh on you plx ooo'},
                {chat_id:uuid(),time:'9/12/21',msg:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.'} 
            ]
        },
        {
            id:uuid(),

            user:
                { 
                    user_id:uuid(),
                    user_phoneNumber:'+23477789360',
                    user_about:{msg:' Heaven is Real',time_updated:'1/08/21'},
                    user_photo:'../img/bg2.jpg',
                    user_name:'Isaac Willy',               
                },
            chats:[
                {chat_id:uuid(),time:'1/08/21',msg:'i am coming over to you house plz.     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.to cheh on you plx ooo'},
                {chat_id:uuid(),time:'15/5/21',msg:'i am coming over to you house plz.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab. to cheh on you plx ooo'},
                {chat_id:uuid(),time:'1/6/21',msg:'i am coming over to you house plz.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab. to cheh on you plx ooo'},
                {chat_id:uuid(),time:'1/10/21',msg:'i am coming over to you house plz.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab. to cheh on you plx ooo'},
                {chat_id:uuid(),time:'2/1/21',msg:'i am coming over to you house plz. to cheh on you plx ooo     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.'},
                {chat_id:uuid(),time:'2/12/21',msg:'i am coming over to you house plz. to cheh on you plx ooo     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaq'},
                {chat_id:uuid(),time:'2/12/21',msg:'i am coming over to you house plz. to cheh      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.on you plx ooo'},
                {chat_id:uuid(),time:'1/12/21',msg:'i am     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.coming over to you house plz. to cheh on you plx ooo'},
                {chat_id:uuid(),time:'9/12/21',msg:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.'} 
            ]
        },
        {
            id:uuid(),

            user:
                { 
                    user_id:uuid(),
                    user_phoneNumber:'+23477789360',
                    user_about:{msg:'We Move',time_updated:'1/08/21'},
                    user_photo:'../img/bg2.jpg',
                    user_name:'Brother Lati',               
                },
            chats:[
                {chat_id:uuid(),time:'1/08/21',msg:'i am coming over to you house plz.     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.to cheh on you plx ooo'},
                {chat_id:uuid(),time:'15/5/21',msg:'i am coming over to you house plz.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab. to cheh on you plx ooo'},
                {chat_id:uuid(),time:'1/6/21',msg:'i am coming over to you house plz.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab. to cheh on you plx ooo'},
                {chat_id:uuid(),time:'1/10/21',msg:'i am coming over to you house plz.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab. to cheh on you plx ooo'},
                {chat_id:uuid(),time:'2/1/21',msg:'i am coming over to you house plz. to cheh on you plx ooo     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.'},
                {chat_id:uuid(),time:'2/12/21',msg:'i am coming over to you house plz. to cheh on you plx ooo     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaq'},
                {chat_id:uuid(),time:'2/12/21',msg:'i am coming over to you house plz. to cheh      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.on you plx ooo'},
                {chat_id:uuid(),time:'1/12/21',msg:'i am     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.coming over to you house plz. to cheh on you plx ooo'},
                {chat_id:uuid(),time:'9/12/21',msg:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque distinctio quis. Quisquam sequi, et a incidunt est totam commodi ipsam ad sed error, reprehenderit nobis, eum nisi assumenda suscipit consequuntur repellendus eveniet. Incidunt adipisci debitis expedita eaque commodi ab.'} 
            ]
        },
    ],
    showPchatMenu:true,
    showPContactInfro:true,
    ShowMyFullImage:true,
    handleOnCurrentChat:null,
    
}



const ChatContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(chatReducer, initialState)

    const showFullImage =() =>{
        dispatch({
            type:'SHOWFULLIMAGE',
            payload:state.ShowMyFullImage
        })
    }

    const getCurrentChatUser =(info) =>{
        dispatch({
            type:'GETCURRENTCHATUSERFORMEDIUMANDLAGDEVICES',
            payload:info
        })
    }

    const reduceFullImge =() =>{
        dispatch({
            type:'REDUCEFULLIMAGE',
            payload:state.ShowMyFullImage
        })
    }

    const handleEditContactInfo = () =>{
        dispatch({
            type:'HANDLEEDITCONTACTINFO',
            payload:state.handleOnCurrentChat
        })
    }
   

    const openChatMenu = (infro) =>{
            dispatch({
                type:'SHOWCHATMENU',
                payload:infro
            })
            
    }
    const closeChatMenu = () =>{
            dispatch({
                type:'CLOSECHATMENU',
            })
            
    }
    
    const deleteChatConservation = () =>{
            dispatch({
                type:'DeLETECHATCONSERVATION',
                payload:state.handleOnCurrentChat
            })

            closeChatMenu()
    }
    const clearChatConservation = () =>{
            dispatch({
                type:'CLEARCHATCONSERVATION',
                payload:state.handleOnCurrentChat.chats
            })

            closeChatMenu()
    }
    const hanPerchatInfro =(id) =>{
        dispatch({
            type:'CURRENTDM',
            payload:id
        })
    }
    

    return (
        <ChatContext.Provider value ={{
            myChats:state.myChats,
            ShowMyFullImage:state.ShowMyFullImage,
            showPContactInfro:state.showPContactInfro,
            handleOnCurrentChat:state.handleOnCurrentChat,
            openChatMenu,
            closeChatMenu,
            deleteChatConservation,
            clearChatConservation,
            hanPerchatInfro,
            showFullImage,
            reduceFullImge,
            handleEditContactInfo,
            getCurrentChatUser,
            
        }}>
            {children}
        </ChatContext.Provider >
    )
}

export default ChatContextProvider
