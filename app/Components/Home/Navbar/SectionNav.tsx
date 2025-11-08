'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { SectionNavLinks } from '../../../Constant/constant';

const SectionNav = () => {
    const [shrinkNav,setShrinkNav]=useState(true);

    useEffect(()=>{
        const handler = () => {
            if (window.scrollY >= 90) setShrinkNav(false);
            if (window.scrollY < 90) setShrinkNav(true);
        };

        window.addEventListener("scroll", handler);

        return () => window.removeEventListener("scroll", handler);
    }, [])

    return (
        <div className={`w-[10%] fixed bottom-0 flex flex-col justify-center transition-all ${
            shrinkNav ? "h-[88%]" : "h-full"
        }`}>
            {SectionNavLinks.map((link)=>{
                return (
                    <Link href={link.url} key={link.id} className="bg-gray-300 hover:bg-gray-400 transition-all grow">
                        <p>{link.label}</p>
                    </Link>
                );
            })}
            {/* <Link href="#" className="bg-gray-300 hover:bg-gray-400 transition-all grow">Cat 1</Link>
            <Link href="#" className="bg-gray-300 hover:bg-gray-400 transition-all grow">Cat 2</Link>
            <Link href="#" className="bg-gray-300 hover:bg-gray-400 transition-all grow">Cat 3</Link> */}
        </div>
  )
}

export default SectionNav