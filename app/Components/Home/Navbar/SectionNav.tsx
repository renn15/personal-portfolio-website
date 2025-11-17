'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { SectionNavLinks } from '../../../Constant/constant';

const SectionNav = () => {
    return (
        <div className="w-[10%] h-[88%] fixed bottom-0 flex flex-col justify-center transition-all">
            {SectionNavLinks.map((link)=>{
                return (
                    <Link href={link.url} key={link.id} className="bg-gray-300 hover:bg-gray-400 transition-all grow">
                        <div className="h-full flex justify-center items-center">
                            <p>{link.label}</p>
                            {/* Insert Icon Here */}
                        </div>
                    </Link>
                );
            })}
        </div>
  )
}

export default SectionNav