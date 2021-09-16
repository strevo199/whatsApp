import React,{useContext,useState} from 'react'
import { MainCOntext } from '../../context/MainCOntext'
import '../../AllCss/Body.css'

const PhoneAuthBody = () => {
    const {countries} = useContext(MainCOntext)
    const [couty, setCouty] = useState('stts')


    const handleCountry = (country) =>{
        const lala = countries.filter(code => country ===code.name )
        document.querySelector('.code').textContent = lala[0].dial_code; 
        // return lala[0].dial_code; 
    }

    return (
        <div className="flex-1 phoneAuthBody flex flex-col">
            <div className=" h-20 flex sm:text-lg text-sm items-center justify-center text-center w-11/12 mx-auto">
                <p>Please confirm your country code and enter your phone number </p>
            </div>
            <div className="">
                <div className="flex relative dropdown-container items-center w-11/12 justify-between mx-auto">
                    <select onClick ={(e) =>handleCountry(e.target.value)}  className="sm:text-2xl getcountry outline-none flex-1 text-blue-500 text-xl">
                         {
                            countries.map(country =>{
                                return (
                                    <option className="text-blue-500 text-sm" value={country.name} key="">{country.name}</option>
                                )
                            })
                        }

                    </select>
                        {/* <i className="fa absolute right-2  fa-chevron-right cursor-pointer opacity-40 hover:opacity-100" aria-hidden="true"></i> */}
                </div>
                <div className="flex  border-b-2 items-center sm:text-3xl text-2xl ">
                    {/* <div className="bg-gray-300 h-0.5 flex absolute right-0  w-11/12"></div> */}
                        <div className="w-3/12 flex  flex-col relative">
                            <div className="w-9/12 h-0.5 right-0 absolute bg-gray-200"></div>
                            <h1 className=" p-1  text-gray-600 code flex justify-center">+93</h1>
                        </div>
                        <div className="relative flex-1">
                            <div className="w-full h-0.5 absolute bg-gray-200"></div>
                            <input placeholder ="phone number" className="flex-1 border-l-2 outline-none p-1" type="tel" pattern ="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>                </div>
                        </div>
            </div> 
        </div>
    )
}

export default PhoneAuthBody
