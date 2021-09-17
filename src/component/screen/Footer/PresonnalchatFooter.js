import React from 'react'

const PresonnalchatFooter = () => {
    return (
        <div className="bg-gray-50 flex-1">
            <div className="w-11/12 flex justify-between h-4/5 items-center mx-auto">
                <i class="fa fa-plus text-indigo-600 cursor-pointer text-xl" aria-hidden="false"></i>
                <div className="w-6/12 h-3/5 gap-x-2 flex bg-white p-2 border-gray-400 rounded-3xl border-2  items-center">
                    <textarea className="w-11/12 h-full outline-none" ></textarea>
                    <i class="fa fa-paperclip flex text-indigo-500 cursor-pointer text-xl" aria-hidden="false"></i>
                </div>
                <i class="fa fa-camera text-indigo-500 cursor-pointer text-xl" aria-hidden="false"></i>
                <i class="fa fa-microphone text-indigo-800 cursor-pointer text-xl" aria-hidden="false"></i>
            </div>
        </div>
    )
}

export default PresonnalchatFooter
