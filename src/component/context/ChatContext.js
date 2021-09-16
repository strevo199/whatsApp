import React,{createContext,useReducer} from 'react'
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
                    user_photo:'../img/sos.jpg',
                    user_name:'Solomon Nabi',               
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
                    user_photo:'../img/cee.jpg',
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
                    user_photo:'../img/IMG_20210326_223428.jpg',
                    user_name:'Confidence laMgbela',               
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
                    user_photo:'../img/img1.jpeg',
                    user_name:'Deborah Deylake',               
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
                    user_photo:'../img/IMG_20210326_223428.jpg',
                    user_name:'Selyster Beard',               
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
                    user_photo:'../img/img1.jpeg',
                    user_name:'Man u lala',               
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
                    user_photo:'../img/img1.jpeg',
                    user_name:'Bright Lilo',               
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
                    user_photo:'../img/img1.jpeg',
                    user_name:'Sarah lala',               
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
    ]
}


const ChatContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(chatReducer, initialState)



    return (
        <ChatContext.Provider value ={{
            myChats:state.myChats,
            currentlyChatting:state.currentlyChatting,
            
        }}>
            {children}
        </ChatContext.Provider >
    )
}

export default ChatContextProvider
