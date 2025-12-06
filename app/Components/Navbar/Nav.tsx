'use client';
import React, { useState, useEffect } from 'react'
import { NavLinks } from '../constant'
import { HiBars3BottomRight } from "react-icons/hi2";
import Link from 'next/link'
import { Lobster } from "next/font/google";

const subtitleFont = Lobster({
  weight: ['400'],
  subsets: ['latin']
})

type Props = {
    openNav: () => void;
}

const Nav = ({openNav}: Props) => {
    return (
        <div className="transition-all fixed duration-200 h-[12vh] z-[100] fixed w-full bg-gray-500">
            <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
                {/* Logo */}
                <div className='relative w-50 h-5'>
                    <div className='z-100 absolute transition-all duration-200 hover:opacity-0 top-[-25%]'>
                        <h1 className={`w-50 text-3xl text-center font-bold text-white bg-gray-500`}>RENN15</h1>
                    </div>
                    <div className='z-50 absolute top-[-33%]'>
                        <h1 className={`w-50 text-3xl text-center font-bold text-blue-300 ${subtitleFont.className}`}>RENN15</h1>
                    </div>
                </div>
                {/* Navlinks */}
                <div className="hidden lg:flex items-center space-x-10">
                    {NavLinks.map((link)=>{
                        return (
                            <Link href={link.url} key={link.id} className="text-white text-xl hover:text-blue-300 font-semibold transition-all duration-200">
                                <p>{link.label}</p>
                            </Link>
                        );
                    })}
                </div>
                {/* Burger Menu */}
                <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white hover:text-black transition-all duration-200 lg:hidden"></HiBars3BottomRight>
            </div>
    </div>
  )
}

export default Nav