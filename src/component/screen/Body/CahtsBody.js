import React,{useContext} from 'react'
import { MainCOntext } from '../../context/MainCOntext'

const CahtsBody = () => {
    const {time} = useContext(MainCOntext)

    return (
        <div className="flex-1  flex">
            <div className="flex w-full flex-col">
                <div className="text-blue-500 items-center font-semibold flex justify-between h-8 w-11/12 mx-auto">
                    <h1>Broadcast Lists</h1>
                    <h1>New Group</h1>
                </div>
                <div className="flex h-16 w-full justify-between">
                    <div className="flex-1 flex justify-between items-center">
                        <div className="text-sm flex-1">
                            <h1 className="font-bold">Stephen lala</h1>
                            <p className="text-gray-500">i am a fine boy</p>
                        </div>
                        <div className="flex text-sm text-gray-500 justify-center  gap-x-3 flex-1">
                            <h1 >11/19/19</h1>
                            <i class="fa fa-chevron-right " aria-hidden="false"></i>
                        </div>

                    </div>
                    <div className ="flex justify-between flex-1">
                        <div className="flex-1 flex flex-col items-center justify-center text-white bg-gray-400">
                            <i class="fa fa-ellipsis-h  text-xl" aria-hidden="false"></i>
                            <h1>More</h1>
                        </div>
                        <div className="flex-1 flex flex-col items-center justify-center text-white bg-blue-900 bg-opacity-80">
                            <i class="fa fa-archive text-xl " aria-hidden="false"></i>
                            <h1>Archive</h1>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default CahtsBody
