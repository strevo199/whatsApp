import React,{useContext} from 'react'
import { ChatContext } from '../../context/ChatContext'

const EditContactInfoBody = () => {
    const {handleOnCurrentChat} = useContext(ChatContext)
    return (
        <div className="flex-1 flex justify-end">
            <div className=" flex-1 flex">
            {handleOnCurrentChat ?
            ( <form className="flex-1 flex flex-col">
                    <div className=" w-full flex h-12 ">
                        <label className="w-3/12 flex  text-lg font-semibold justify-center">Name</label>
                        <input type="text" placeholder="Enter Name" className=" focus:outline-none items-center flex font-semibold py-2 border-b-2 w-9/12"/>
                    </div>
                    <div className=" w-full flex h-12 justify-end">
                        <input type="text" placeholder="Enter Name" className=" focus:outline-none items-center flex font-semibold py-2 border-b-2 w-9/12 "/>
                    </div>
                    <div className=" w-full flex h-12 ">
                        <label className="w-3/12 flex  text-lg font-semibold justify-center">Phone</label>
                        <input type="text" placeholder="Enter Phone number" className=" focus:outline-none items-center flex font-semibold py-2 border-b-2 w-9/12"/>
                    </div>
                </form>):
               
            (<p>Loading....</p>)}
            </div>
        </div>
    )
}

export default EditContactInfoBody
