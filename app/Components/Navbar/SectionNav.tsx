'use client';
import Link from 'next/link';
import { ProjectsCategory } from '../constant';

const SectionNav = () => {
    return (
        <div className="w-[10%] h-[88%] fixed bottom-0 flex flex-col justify-center transition-all">
            {ProjectsCategory.map((link)=>{
                return (
                    <Link href={link.url} key={link.id} className="bg-gray-300 hover:bg-gray-400 transition-all grow">
                        <div className="h-full flex text-center justify-center items-center">
                            {/* Insert Icon Here */}
                            <p>{link.label}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
  )
}

export default SectionNav