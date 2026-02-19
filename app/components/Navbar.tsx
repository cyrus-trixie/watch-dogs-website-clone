import { ChevronDown, Download, Search, User } from 'lucide-react';
import logo from '@/public/images/watch-dogs2-nav-brand-logo.png';
import logo2 from '@/public/images/wd2-ubicom-hero-logo-stacked-white.png';

export default function Navbar() {
    return (
        <div className='flex flex-col w-full'>
            {/* TOP NAV: BLACK BAR */}
            <nav className='bg-black w-full h-12 flex items-center  px-4'>
                {/* Left side links */}
                <div className="flex items-center space-x-6 ml-10">
                    <img src={logo2.src} alt="Ubisoft Logo" className='w-8 h-8 object-contain'/>
                    <span className='text-white text-xs font-bold cursor-pointer hover:text-[#33c8f3]'>GAMES</span>
                    <span className='text-white text-xs font-bold cursor-pointer hover:text-[#33c8f3]'>NEWS</span>
                    <span className='text-white text-xs font-bold cursor-pointer hover:text-[#33c8f3]'>STORE</span>
                    <span className='text-white text-xs font-bold cursor-pointer hover:text-[#33c8f3]'>UBISOFT+</span>
                </div>

                {/* Right side icons */}
                <div className='flex items-center space-x-5 text-white ml-auto'>
                    <div className='flex items-center space-x-2 cursor-pointer hover:text-[#33c8f3]'>
                        <span className='text-[10px] font-bold uppercase hidden md:inline'>Download Ubisoft Connect</span>
                        <Download size={18} />
                    </div>
                    <Search size={20} className="cursor-pointer hover:text-[#33c8f3]" />
                    <User size={20} className="cursor-pointer hover:text-[#33c8f3]" />
                </div>
            </nav>

            {/* BOTTOM NAV: WATCH DOGS BAR */}
            <nav className='flex items-center w-full h-14 bg-[#2A2B2F]'>
                <img src={logo.src} alt="Watch Dogs 2 Logo" className='w-32 ml-24'/>
                
                {/* Centered-ish section */}
                <div className='flex items-center space-x-1 font-bold text-lg text-white ml-60 cursor-pointer group'>
                    <span>MORE GAMES</span>
                    <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
                </div>

                {/* The "Wall-to-Wall" Button */}
                <button className='ml-auto text-white text-xl font-black bg-[#33c8f3] h-full w-56 hover:bg-[#26a8cc] transition-colors'>
                    BUY NOW
                </button>
            </nav>
        </div>
    );
}