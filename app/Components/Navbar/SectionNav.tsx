'use client';
import Link from 'next/link';
import { ProjectsCategory } from '../constant';
import Image from 'next/image';

const SectionNav = () => {
    return (
        <div className="w-[10%] h-[88%] fixed bottom-0 flex flex-col justify-center transition-all">
            {ProjectsCategory.map((link)=>{
                return (
                    <Link href={link.url} key={link.id} className="bg-gray-300 hover:bg-blue-300 transition-all grow">
                        <div className="h-full flex flex-col text-center justify-center items-center">
                            <Image src={link.icon} width={60} height={60} alt={`Logo of {content.label}`}/>
                            <p className='text-base'>{link.label}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
  )
}

export default SectionNav