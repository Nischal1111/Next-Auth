"use client"

import React, { use, useState } from "react"
// import {Axios} from "Axios"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Signup(){
    const [user,setUser]=useState({
        username:"",
        email:"",
        pass:""     
    })

    const router = useRouter()

    const handleSubmit=async (e)=>{
        e.preventDefault()
    }

    return(
        <>
            <main className="bg-pink-50 h-screen w-full flex items-center justify-center">
                <div className="bg-gray-50 p-6 text-center w-[400px] h-[500px] rounded-md shadow-lg">
                    <h1 className="text-3xl">Signup</h1>
                    <form action="" className="flex flex-col">
                        <div className="flex mt-3 flex-col p-5 gap-3">
                            <label htmlFor="name" className="self-start">Fullname:</label>
                            <input type="text"id="name" placeholder="Enter your name" value={user.username} onChange={()=>{setUser({...user,username:e.target.value})}} className="border border-x-gray-200 py-3 px-6 w-full rounded-md focus:outline-none"/>
                            <label htmlFor="email" className="self-start">Email:</label>
                            <input type="email"  id="email" placeholder="Enter your email" value={user.email}
                                onChange={()=>{setUser({...user,email:e.target.value})}}
                                className="border border-x-gray-200 py-3 px-6 w-full rounded-md focus:outline-none"/>
                            <label htmlFor="password" className="self-start">Password</label>
                            <input type="password" id="password" placeholder="Enter your password" 
                            value={user.pass} 
                            onChange={()=>{setUser({...user,pass:e.target.value})}}
                            className="border border-x-gray-200 py-3 px-6 w-full rounded-md focus:outline-none"/>
                        </div>
                        <button className="bg-purple-200 py-[10px] px-[32px] mt-5 self-start ml-[1.2rem] text-zinc-800 hover:bg-purple-300 transition-all duration-400">Signup</button>
                    </form>
                </div> 
            </main>
        </>
    )
}
