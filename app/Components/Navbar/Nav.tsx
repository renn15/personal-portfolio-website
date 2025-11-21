'use client';
import React, { useState, useEffect } from 'react'
import { NavLinks } from '../constant'
import { HiBars3BottomRight } from "react-icons/hi2";
import Link from 'next/link'

type Props = {
    openNav: () => void;
}

const Nav = ({openNav}: Props) => {
    return (
        <div className="transition-all fixed duration-200 h-[12vh] z-[100] fixed w-full bg-gray-500">
            <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
                {/* Logo */}
                <h1 className="text-xl md:text-2xl font-bold text-white hover:text-lime-200 transition-all duration-200 ">
                    RENN15
                </h1>
                {/* Navlinks */}
                <div className="hidden lg:flex items-center space-x-10">
                    {NavLinks.map((link)=>{
                        return (
                            <Link href={link.url} key={link.id} className="text-white text-lg hover:text-black font-semibold transition-all duration-200">
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